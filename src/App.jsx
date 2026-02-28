import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as THREE from "three";

// ─────────────────────────────────────────
//  THEME (fonts loaded via index.html)
// ─────────────────────────────────────────

const G = "#2D7FF9";       // blue accent
const GA = (a) => `rgba(45,127,249,${a})`;
const CYAN = "#4ECDC4";
const CA = (a) => `rgba(78,205,196,${a})`;
const BD = 0.15;

// ─────────────────────────────────────────
//  THREE.JS NEURAL NETWORK BACKGROUND
// ─────────────────────────────────────────
function NeuralBackground() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let W = window.innerWidth, H = window.innerHeight;
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    el.appendChild(renderer.domElement);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, W / H, 0.1, 800);
    camera.position.z = 110;

    const COUNT = 130;
    const pos = new Float32Array(COUNT * 3);
    const col = new Float32Array(COUNT * 3);
    const sz = new Float32Array(COUNT);
    const cG = new THREE.Color(G);
    const cC = new THREE.Color(CYAN);
    const cW = new THREE.Color(0.2, 0.22, 0.3);

    for (let i = 0; i < COUNT; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 260;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 160;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 80;
      const r = Math.random();
      const c = r > 0.85 ? cG : r > 0.7 ? cC : cW;
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
      sz[i] = r > 0.7 ? Math.random() * 1.8 + 0.5 : Math.random() * 0.6 + 0.2;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(col, 3));
    geo.setAttribute("size", new THREE.BufferAttribute(sz, 1));
    const mat = new THREE.ShaderMaterial({
      vertexShader: `attribute float size;attribute vec3 color;varying vec3 vColor;varying float vAlpha;uniform float uTime;void main(){vColor=color;vec3 p=position;p.x+=sin(uTime*0.2+position.z*0.03)*0.4;p.y+=cos(uTime*0.15+position.x*0.02)*0.3;vAlpha=0.2+0.4*abs(sin(uTime*0.5+position.x*0.06));vec4 mv=modelViewMatrix*vec4(p,1.0);gl_PointSize=size*(200.0/-mv.z);gl_Position=projectionMatrix*mv;}`,
      fragmentShader: `varying vec3 vColor;varying float vAlpha;void main(){float d=length(gl_PointCoord-vec2(0.5));if(d>0.5)discard;gl_FragColor=vec4(vColor,smoothstep(0.5,0.05,d)*vAlpha);}`,
      uniforms: { uTime: { value: 0 } },
      transparent: true,
      vertexColors: true,
      depthWrite: false,
    });
    const points = new THREE.Points(geo, mat);
    scene.add(points);

    // neural connections
    const lPairs = [];
    for (let i = 0; i < COUNT; i++)
      for (let j = i + 1; j < COUNT; j++) {
        const dx = pos[i * 3] - pos[j * 3],
          dy = pos[i * 3 + 1] - pos[j * 3 + 1],
          dz = pos[i * 3 + 2] - pos[j * 3 + 2];
        if (Math.sqrt(dx * dx + dy * dy + dz * dz) < 20 && lPairs.length < 100)
          lPairs.push(i, j);
      }
    const lP = new Float32Array(lPairs.length * 3);
    const lC = new Float32Array(lPairs.length * 3);
    for (let k = 0; k < lPairs.length; k++) {
      const i = lPairs[k];
      lP[k * 3] = pos[i * 3];
      lP[k * 3 + 1] = pos[i * 3 + 1];
      lP[k * 3 + 2] = pos[i * 3 + 2];
      const hot = col[i * 3] > 0.4;
      lC[k * 3] = hot ? 0.7 : 0.15;
      lC[k * 3 + 1] = hot ? 0.6 : 0.17;
      lC[k * 3 + 2] = hot ? 0.2 : 0.25;
    }
    const lg = new THREE.BufferGeometry();
    lg.setAttribute("position", new THREE.BufferAttribute(lP, 3));
    lg.setAttribute("color", new THREE.BufferAttribute(lC, 3));
    scene.add(
      new THREE.LineSegments(
        lg,
        new THREE.LineBasicMaterial({
          vertexColors: true,
          transparent: true,
          opacity: 0.1,
          depthWrite: false,
        })
      )
    );

    // data streams
    const streams = [];
    for (let i = 0; i < 10; i++) {
      const sg = new THREE.BufferGeometry();
      const len = Math.random() * 25 + 10;
      const sx = (Math.random() - 0.5) * 220,
        sy = (Math.random() - 0.5) * 120,
        sz2 = (Math.random() - 0.5) * 50;
      sg.setAttribute(
        "position",
        new THREE.BufferAttribute(
          new Float32Array([sx, sy, sz2, sx + len, sy, sz2]),
          3
        )
      );
      const s = new THREE.Line(
        sg,
        new THREE.LineBasicMaterial({
          color: i % 2 === 0 ? G : CYAN,
          transparent: true,
          opacity: Math.random() * 0.05 + 0.02,
        })
      );
      s.userData = { spd: Math.random() * 0.25 + 0.06 };
      scene.add(s);
      streams.push(s);
    }

    let mx = 0, my = 0;
    const onMouse = (e) => {
      mx = (e.clientX / W - 0.5) * 2;
      my = (e.clientY / H - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouse);
    let animId, t = 0;
    const tick = () => {
      animId = requestAnimationFrame(tick);
      t += 0.006;
      mat.uniforms.uTime.value = t;
      points.rotation.y = t * 0.02 + mx * 0.04;
      points.rotation.x = my * 0.02;
      streams.forEach((s) => {
        s.position.x += s.userData.spd * 0.08;
        if (s.position.x > 120) s.position.x = -120;
      });
      camera.position.x += (mx * 3 - camera.position.x) * 0.02;
      camera.position.y += (-my * 2 - camera.position.y) * 0.02;
      renderer.render(scene, camera);
    };
    tick();
    const onResize = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      camera.aspect = W / H;
      camera.updateProjectionMatrix();
      renderer.setSize(W, H);
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement);
    };
  }, []);
  return (
    <div
      ref={ref}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}

// ─────────────────────────────────────────
//  SCANLINE
// ─────────────────────────────────────────
function Scanline() {
  return (
    <motion.div
      style={{
        position: "fixed",
        left: 0,
        width: "100%",
        height: 1.5,
        background: `linear-gradient(90deg,transparent,${G},transparent)`,
        zIndex: 2,
        pointerEvents: "none",
      }}
      animate={{ top: ["0%", "100%"], opacity: [0, 0.3, 0.3, 0] }}
      transition={{
        duration: 7,
        repeat: Infinity,
        ease: "linear",
        times: [0, 0.03, 0.97, 1],
      }}
    />
  );
}

// ─────────────────────────────────────────
//  HUD CORNERS
// ─────────────────────────────────────────
function HudCorner({ pos, delay }) {
  const s = {
    position: "fixed",
    width: 44,
    height: 44,
    zIndex: 3,
    pointerEvents: "none",
  };
  const p = {
    tl: { top: 14, left: 14 },
    tr: { top: 14, right: 14, transform: "scaleX(-1)" },
    bl: { bottom: 14, left: 14, transform: "scaleY(-1)" },
    br: { bottom: 14, right: 14, transform: "scale(-1,-1)" },
  };
  return (
    <motion.div
      style={{ ...s, ...p[pos] }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.35 }}
      transition={{ delay, duration: 0.4 }}
    >
      <svg viewBox="0 0 44 44" fill="none" width="100%" height="100%">
        <path d="M2 24L2 2L24 2" stroke={G} strokeWidth="1.5" />
        <path d="M2 12L6 12" stroke={G} strokeWidth="1" />
        <path d="M12 2L12 6" stroke={G} strokeWidth="1" />
        <circle cx="2" cy="2" r="1.5" fill={G} />
      </svg>
    </motion.div>
  );
}

// ─────────────────────────────────────────
//  BOOT SCREEN
// ─────────────────────────────────────────
const BOOT = [
  "INITIALIZING M.I.D.A.S FRAMEWORK...",
  "LOADING AI_STRATEGY v3.1.0",
  "CONNECTING NEURAL NODES... OK",
  "CALIBRATING BUSINESS ENGINE...",
  "RENDERING INTERFACE...",
];
function BootScreen({ onDone }) {
  const [lines, setLines] = useState([]);
  const [prog, setProg] = useState(0);
  const [exiting, setExiting] = useState(false);
  useEffect(() => {
    let i = 0;
    const next = () => {
      if (i >= BOOT.length) {
        setTimeout(() => {
          setExiting(true);
          setTimeout(onDone, 450);
        }, 150);
        return;
      }
      setLines((p) => [...p, BOOT[i]]);
      setProg(((i + 1) / BOOT.length) * 100);
      i++;
      setTimeout(next, 380);
    };
    setTimeout(next, 180);
  }, []);
  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            background: "#06060c",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 5,
            fontFamily: "'Share Tech Mono',monospace",
            fontSize: 11,
            color: GA(0.7),
            letterSpacing: "0.1em",
          }}
        >
          <div style={{ textAlign: "left", lineHeight: 2 }}>
            {lines.map((l, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.18 }}
              >
                {l}
              </motion.div>
            ))}
          </div>
          <div
            style={{
              width: 190,
              height: 2,
              background: "rgba(255,255,255,.05)",
              borderRadius: 2,
              marginTop: 14,
              overflow: "hidden",
            }}
          >
            <motion.div
              style={{ height: "100%", background: G }}
              animate={{ width: `${prog}%` }}
              transition={{ duration: 0.32 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ─────────────────────────────────────────
//  PING DOT
// ─────────────────────────────────────────
function Ping({ color }) {
  const c = color || G;
  return (
    <span
      style={{
        position: "relative",
        width: 7,
        height: 7,
        flexShrink: 0,
        display: "inline-block",
      }}
    >
      <span
        style={{
          display: "block",
          width: 7,
          height: 7,
          borderRadius: "50%",
          background: c,
        }}
      />
      <motion.span
        style={{
          position: "absolute",
          inset: -4,
          borderRadius: "50%",
          border: `1px solid ${c}`,
          display: "block",
        }}
        animate={{ scale: [0.4, 2.6], opacity: [1, 0] }}
        transition={{ duration: 1.7, repeat: Infinity, ease: "easeOut" }}
      />
    </span>
  );
}

// ─────────────────────────────────────────
//  CTA BUTTON
// ─────────────────────────────────────────
function CtaButton({ label = "Fazer o Quiz de Diagnóstico", onClick, variant }) {
  const [h, setH] = useState(false);
  const isSecondary = variant === "secondary";
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      onClick={onClick}
      style={{
        fontFamily: "'Barlow Condensed',sans-serif",
        fontWeight: 700,
        fontSize: 14,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        padding: isSecondary ? "12px 28px" : "14px 32px",
        border: isSecondary ? `1px solid ${GA(0.4)}` : "none",
        borderRadius: 3,
        background: isSecondary
          ? h ? GA(0.1) : "transparent"
          : h
          ? `linear-gradient(135deg,${G},${CYAN})`
          : G,
        color: isSecondary ? G : "#06060c",
        cursor: "pointer",
        position: "relative",
        overflow: "hidden",
        transition: "background 0.3s",
      }}
    >
      {!isSecondary && (
        <motion.div
          animate={{ x: h ? ["-100%", "200%"] : "-100%" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg,transparent,rgba(255,255,255,0.3),transparent)",
            pointerEvents: "none",
          }}
        />
      )}
      {label}
    </motion.button>
  );
}

// ─────────────────────────────────────────
//  SECTION OBSERVER HOOK
// ─────────────────────────────────────────
function useOnScreen(threshold = 0.1) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

// ─────────────────────────────────────────
//  HERO — LASER HEADLINE
// ─────────────────────────────────────────
const H_LINES = [
  { text: "A Inteligência Artificial", accent: false },
  { text: "Não Vai Substituir", accent: false },
  { text: "Seu Marketing.", accent: false },
  { text: "Estrategistas Que", accent: false },
  { text: "Usam IA Vão.", accent: true },
];
const LINE_DUR = 0.5;

function LaserHeadline({ startDelay }) {
  return (
    <div style={{ position: "relative", display: "flex", gap: 14 }}>
      <div style={{ position: "relative", flexShrink: 0, width: 3 }}>
        <motion.div
          initial={{ scaleY: 0, transformOrigin: "top" }}
          animate={{ scaleY: 1 }}
          transition={{
            delay: startDelay,
            duration: LINE_DUR * H_LINES.length,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 3,
            height: "100%",
            background: `linear-gradient(to bottom,${G},${GA(0.15)})`,
            borderRadius: 2,
          }}
        />
        <motion.div
          animate={{
            top: ["0%", "100%"],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            delay: startDelay,
            duration: LINE_DUR * H_LINES.length,
            ease: "linear",
            times: [0, 0.02, 0.96, 1],
          }}
          style={{
            position: "absolute",
            left: -4,
            width: 11,
            height: 11,
            borderRadius: "50%",
            background: G,
            boxShadow: `0 0 12px 4px ${GA(0.7)}`,
            transform: "translateY(-50%)",
          }}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {H_LINES.map((line, i) => (
          <div key={i} style={{ overflow: "hidden", position: "relative" }}>
            <motion.div
              initial={{ y: "110%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: startDelay + i * LINE_DUR,
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{
                fontFamily: "'Barlow Condensed',sans-serif",
                fontWeight: 900,
                fontSize: "clamp(24px,4.5vw,42px)",
                lineHeight: 1.05,
                letterSpacing: "-0.01em",
                textTransform: "uppercase",
                color: line.accent ? G : "#fff",
                position: "relative",
              }}
            >
              {line.text}
              <motion.span
                initial={{ opacity: 0, x: 0 }}
                animate={{ opacity: [0, 0.6, 0], x: [0, -4, 0] }}
                transition={{
                  delay: startDelay + i * LINE_DUR + 0.02,
                  duration: 0.18,
                  times: [0, 0.5, 1],
                }}
                style={{
                  position: "absolute",
                  inset: 0,
                  color: G,
                  fontFamily: "inherit",
                  fontWeight: "inherit",
                  fontSize: "inherit",
                  textTransform: "inherit",
                  pointerEvents: "none",
                  userSelect: "none",
                }}
              >
                {line.text}
              </motion.span>
              {line.accent && (
                <motion.span
                  initial={{ scaleX: 0, transformOrigin: "left" }}
                  animate={{ scaleX: 1 }}
                  transition={{
                    delay: startDelay + i * LINE_DUR + 0.5,
                    duration: 0.45,
                  }}
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: 3,
                    background: G,
                    opacity: 0.4,
                    display: "block",
                    borderRadius: 1,
                  }}
                />
              )}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────
//  HERO — TERMINAL EMULATOR
// ─────────────────────────────────────────
const TERMINAL_LINES = [
  { text: "$ midas --scan-portfolio", color: GA(0.5), delay: 0 },
  { text: "▶ Conectando ao Framework M.I.D.A.S...", color: "rgba(40,200,64,0.6)", delay: 600 },
  { text: "", color: "", delay: 900 },
  { text: "┌─ RESULTADOS ATIVOS ──────────────────", color: "rgba(255,255,255,0.2)", delay: 1200 },
  { text: "│", color: "rgba(255,255,255,0.1)", delay: 1400 },
  { text: "│  NeoVisão     → +240% leads gerados", color: CYAN, delay: 1600 },
  { text: "│  Latitude23   → Experiência Escalada", color: CYAN, delay: 2000 },
  { text: "│  Ação Corp.   → ROI 3.8x em tráfego", color: CYAN, delay: 2400 },
  { text: "│  MarmoApp     → Setor digitalizado", color: CYAN, delay: 2800 },
  { text: "│", color: "rgba(255,255,255,0.1)", delay: 3100 },
  { text: "└──────────────────────────────────────", color: "rgba(255,255,255,0.2)", delay: 3300 },
  { text: "", color: "", delay: 3500 },
  { text: "✓ 5 empresas operando com IA ativa", color: "rgba(40,200,64,0.75)", delay: 3800 },
  { text: "✓ Framework validado em campo", color: "rgba(40,200,64,0.75)", delay: 4100 },
];

function TerminalEmulator({ startDelay }) {
  const [visibleLines, setVisibleLines] = useState([]);
  useEffect(() => {
    const timers = TERMINAL_LINES.map((line, i) =>
      setTimeout(
        () => setVisibleLines((p) => [...p, line]),
        (startDelay || 0) * 1000 + line.delay
      )
    );
    return () => timers.forEach(clearTimeout);
  }, [startDelay]);

  return (
    <div
      style={{
        width: "100%",
        maxWidth: 400,
        background: "rgba(6,6,10,0.95)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 8,
        overflow: "hidden",
        boxShadow: `0 0 40px rgba(0,0,0,0.5), 0 0 20px ${GA(0.03)}`,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 7,
          padding: "10px 14px",
          background: "rgba(255,255,255,0.03)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        {["#ff5f57", "#febc2e", "#28c840"].map((c, i) => (
          <div
            key={i}
            style={{
              width: 11,
              height: 11,
              borderRadius: "50%",
              background: c,
              opacity: 0.65,
            }}
          />
        ))}
        <span
          style={{
            marginLeft: 8,
            fontFamily: "'Share Tech Mono',monospace",
            fontSize: 10,
            color: "rgba(255,255,255,0.25)",
            letterSpacing: "0.1em",
          }}
        >
          midas_terminal v3.1
        </span>
      </div>
      <div
        style={{
          padding: "16px 16px 20px",
          fontFamily: "'Share Tech Mono',monospace",
          fontSize: 12,
          lineHeight: 1.85,
          minHeight: 280,
        }}
      >
        {visibleLines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.15 }}
            style={{ color: line.color, minHeight: line.text ? "auto" : 8 }}
          >
            {line.text}
          </motion.div>
        ))}
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          style={{ color: GA(0.6) }}
        >
          ▋
        </motion.span>
      </div>
    </div>
  );
}

// ═════════════════════════════════════════════════════
//  SECTION 1 — HERO
// ═════════════════════════════════════════════════════
function HeroSection({ booted, onQuizStart }) {
  const HL_START = BD + 0.35;
  return (
    <section
      style={{
        position: "relative",
        zIndex: 5,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "80px 20px 60px",
      }}
    >
      {booted && (
        <>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: BD + 0.2, duration: 0.4 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 9,
              marginBottom: 28,
              fontFamily: "'Share Tech Mono',monospace",
              fontSize: 10,
              color: GA(0.6),
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            <Ping />
            <span>// Documentando a escala real de 5 empresas do zero</span>
          </motion.div>

          <div
            style={{
              display: "flex",
              gap: 40,
              alignItems: "flex-start",
              flexWrap: "wrap",
              justifyContent: "center",
              width: "100%",
              maxWidth: 980,
            }}
          >
            {/* LEFT — headline & CTA */}
            <div style={{ flex: "1 1 420px", minWidth: 300 }}>
              <LaserHeadline startDelay={HL_START} />

              <motion.div
                initial={{ scaleX: 0, transformOrigin: "left" }}
                animate={{ scaleX: 1 }}
                transition={{
                  delay: HL_START + H_LINES.length * LINE_DUR + 0.1,
                  duration: 0.55,
                  ease: "easeOut",
                }}
                style={{
                  height: 1,
                  background: `linear-gradient(90deg,${G},${GA(0.05)} 60%,transparent)`,
                  margin: "20px 0",
                }}
              />

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: HL_START + H_LINES.length * LINE_DUR + 0.2,
                  duration: 0.5,
                }}
                style={{
                  fontSize: "clamp(13px,1.7vw,15px)",
                  color: "rgba(255,255,255,.45)",
                  lineHeight: 1.8,
                  fontWeight: 300,
                  margin: "0 0 8px",
                  maxWidth: 440,
                }}
              >
                Estou documentando a escala real de 5 empresas do zero.
                Deixe de ser refém de processos manuais e transforme sua
                operação em um ativo inteligente com o{" "}
                <strong style={{ color: G, fontWeight: 600 }}>
                  Framework M.I.D.A.S.
                </strong>
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: HL_START + H_LINES.length * LINE_DUR + 0.35,
                  duration: 0.5,
                }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  marginTop: 20,
                }}
              >
                <CtaButton
                  label="▶ Fazer o Quiz de Diagnóstico IA"
                  onClick={onQuizStart}
                />
                <p
                  style={{
                    fontFamily: "'Share Tech Mono',monospace",
                    fontSize: 9,
                    color: "rgba(255,255,255,.2)",
                    letterSpacing: "0.08em",
                    margin: 0,
                  }}
                >
                  // Gratuito · Sem compromisso ·{" "}
                  <span style={{ color: "rgba(255,255,255,.35)" }}>2 min</span>
                </p>
              </motion.div>
            </div>

            {/* RIGHT — Terminal */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: HL_START + 0.5,
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{ flex: "1 1 360px", minWidth: 300 }}
            >
              <TerminalEmulator startDelay={HL_START + 0.8} />
            </motion.div>
          </div>
        </>
      )}
    </section>
  );
}

// ═════════════════════════════════════════════════════
//  SECTION 2 — CONSULTORIA M.I.D.A.S
// ═════════════════════════════════════════════════════
const MIDAS_PILLARS = [
  {
    letter: "M",
    title: "Mídia",
    desc: "Tráfego Pago inteligente. Campanhas otimizadas por IA que maximizam ROI e eliminam desperdício de verba.",
    color: "#E74C3C",
    icon: "◉",
  },
  {
    letter: "I",
    title: "Inteligência",
    desc: "Implementação de agentes de IA para triagem automática, atendimento 24/7 e qualificação de leads.",
    color: CYAN,
    icon: "◎",
  },
  {
    letter: "D",
    title: "Digital",
    desc: "Criação de sites de alta conversão. Presença digital estratégica que transforma visitas em receita.",
    color: "#3498DB",
    icon: "◈",
  },
  {
    letter: "A",
    title: "Autoridade",
    desc: "Branding e posicionamento orgânico em redes variadas. Conteúdo que constrói reputação e confiança.",
    color: G,
    icon: "◆",
  },
  {
    letter: "S",
    title: "Sistema",
    desc: "CRMs e Dashboards interativos. Infraestrutura integrada que dá visibilidade total da sua operação.",
    color: "#9B59B6",
    icon: "▣",
  },
];

function MidasCard({ pillar, index, isVisible }) {
  const [active, setActive] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (!isVisible) return;
    const t = setTimeout(() => setActive(true), index * 150);
    return () => clearTimeout(t);
  }, [isVisible, index]);

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={{ opacity: 0, y: 28 }}
      animate={active ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      style={{
        flex: "1 1 170px",
        minWidth: 160,
        position: "relative",
        background: hovered ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.02)",
        border: `1px solid ${hovered ? pillar.color + "55" : "rgba(255,255,255,0.07)"}`,
        borderRadius: 8,
        padding: "28px 20px 24px",
        cursor: "default",
        transition: "background 0.25s, border-color 0.25s",
        overflow: "hidden",
      }}
    >
      <motion.div
        initial={{ scaleX: 0, transformOrigin: "left" }}
        animate={active ? { scaleX: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 2,
          background: pillar.color,
          borderRadius: "8px 8px 0 0",
        }}
      />

      <div
        style={{
          fontFamily: "'Barlow Condensed',sans-serif",
          fontWeight: 900,
          fontSize: 42,
          color: hovered ? pillar.color : "rgba(255,255,255,0.08)",
          lineHeight: 1,
          marginBottom: 6,
          transition: "color 0.3s",
        }}
      >
        {pillar.letter}
      </div>
      <div
        style={{
          fontFamily: "'DM Sans',sans-serif",
          fontWeight: 600,
          fontSize: 15,
          color: "rgba(255,255,255,0.9)",
          marginBottom: 10,
        }}
      >
        {pillar.title}
      </div>
      <p
        style={{
          fontFamily: "'DM Sans',sans-serif",
          fontWeight: 300,
          fontSize: 13,
          color: "rgba(255,255,255,0.42)",
          lineHeight: 1.7,
          margin: 0,
        }}
      >
        {pillar.desc}
      </p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={active ? { opacity: 1 } : {}}
        transition={{ delay: 0.4, duration: 0.3 }}
        style={{
          position: "absolute",
          bottom: 12,
          right: 14,
          display: "flex",
          alignItems: "center",
          gap: 5,
        }}
      >
        <motion.div
          animate={{ opacity: [1, 0.2, 1] }}
          transition={{ duration: 1.4, repeat: Infinity }}
          style={{
            width: 5,
            height: 5,
            borderRadius: "50%",
            background: pillar.color,
          }}
        />
        <span
          style={{
            fontFamily: "'Share Tech Mono',monospace",
            fontSize: 8,
            color: pillar.color + "88",
            letterSpacing: "0.1em",
          }}
        >
          ACTIVE
        </span>
      </motion.div>
    </motion.div>
  );
}

function MidasSection() {
  const [ref, visible] = useOnScreen();
  return (
    <section
      ref={ref}
      style={{
        position: "relative",
        zIndex: 5,
        padding: "100px 20px 80px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <motion.p
        initial={{ opacity: 0 }}
        animate={visible ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
        style={{
          fontFamily: "'Share Tech Mono',monospace",
          fontSize: 11,
          color: GA(0.5),
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          marginBottom: 14,
          textAlign: "center",
        }}
      >
        [ CONSULTORIA :: M.I.D.A.S ]
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        animate={visible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        style={{
          fontFamily: "'DM Sans',sans-serif",
          fontWeight: 300,
          fontSize: "clamp(24px,3.5vw,38px)",
          textAlign: "center",
          lineHeight: 1.35,
          color: "rgba(255,255,255,0.9)",
          marginBottom: 12,
          maxWidth: 640,
        }}
      >
        A Fusão entre{" "}
        <strong style={{ fontWeight: 700, color: "#fff" }}>
          Estratégia Humana
        </strong>{" "}
        e{" "}
        <strong style={{ fontWeight: 700, color: G }}>
          Eficiência Artificial.
        </strong>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={visible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
        style={{
          fontFamily: "'DM Sans',sans-serif",
          fontWeight: 300,
          fontSize: "clamp(14px,1.8vw,16px)",
          textAlign: "center",
          color: "rgba(255,255,255,0.38)",
          marginBottom: 56,
          maxWidth: 500,
          lineHeight: 1.7,
        }}
      >
        5 pilares que transformam sua operação de marketing em um ativo
        inteligente e escalável.
      </motion.p>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 14,
          width: "100%",
          maxWidth: 920,
          marginBottom: 48,
        }}
      >
        {MIDAS_PILLARS.map((p, i) => (
          <MidasCard key={i} pillar={p} index={i} isVisible={visible} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={visible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.5 }}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 12,
        }}
      >
        <CtaButton label="Quero uma Reunião de Diagnóstico M.I.D.A.S" />
        <span
          style={{
            fontFamily: "'Share Tech Mono',monospace",
            fontSize: 10,
            color: "rgba(255,255,255,0.22)",
            letterSpacing: "0.08em",
          }}
        >
          // para empresas que querem escalar com inteligência
        </span>
      </motion.div>
    </section>
  );
}

// ═════════════════════════════════════════════════════
//  SECTION 3 — ECOSSISTEMA (SKIN IN THE GAME)
// ═════════════════════════════════════════════════════
const OPERATIONS = [
  {
    name: "NeoVisão",
    desc: "Construção de marca e venda de óculos home-based. Do zero ao lucro com tráfego pago e IA.",
    metric: "+240% leads",
    color: "#E74C3C",
    tag: "E-COMMERCE",
  },
  {
    name: "Latitude23",
    desc: "Plataforma de experiências costeiras e hospedagens. Experiência do cliente escalada com automação.",
    metric: "Exp. Escalada",
    color: CYAN,
    tag: "TURISMO",
  },
  {
    name: "Ação Corporate",
    desc: "Tráfego pago e gestão de saúde corporativa. ROI multiplicado com campanhas orientadas por dados.",
    metric: "ROI 3.8x",
    color: "#3498DB",
    tag: "SAÚDE CORP.",
  },
  {
    name: "MarmoApp",
    desc: "Digitalização do setor de rochas ornamentais. Um mercado tradicional transformado pela tecnologia.",
    metric: "Setor Digitalizado",
    color: "#9B59B6",
    tag: "PROPTECH",
  },
];

function OperationCard({ op, index, isVisible }) {
  const [active, setActive] = useState(false);
  const [hovered, setHovered] = useState(false);
  useEffect(() => {
    if (!isVisible) return;
    const t = setTimeout(() => setActive(true), index * 200);
    return () => clearTimeout(t);
  }, [isVisible, index]);

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={{ opacity: 0, y: 24 }}
      animate={active ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      style={{
        flex: "1 1 200px",
        position: "relative",
        background: hovered
          ? "rgba(255,255,255,0.04)"
          : "rgba(255,255,255,0.015)",
        border: `1px solid ${
          hovered ? op.color + "44" : "rgba(255,255,255,0.06)"
        }`,
        borderRadius: 8,
        padding: "26px 22px 60px",
        cursor: "default",
        transition: "background 0.25s, border-color 0.25s",
        overflow: "hidden",
      }}
    >
      <motion.div
        initial={{ scaleX: 0, transformOrigin: "left" }}
        animate={active ? { scaleX: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 2,
          background: op.color,
        }}
      />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 14,
        }}
      >
        <span
          style={{
            fontFamily: "'Barlow Condensed',sans-serif",
            fontWeight: 800,
            fontSize: 20,
            color: "#fff",
          }}
        >
          {op.name}
        </span>
        <span
          style={{
            fontFamily: "'Share Tech Mono',monospace",
            fontSize: 9,
            color: op.color,
            background: op.color + "15",
            border: `1px solid ${op.color}33`,
            padding: "2px 8px",
            borderRadius: 2,
            letterSpacing: "0.1em",
          }}
        >
          {op.tag}
        </span>
      </div>

      <p
        style={{
          fontFamily: "'DM Sans',sans-serif",
          fontWeight: 300,
          fontSize: 13,
          color: "rgba(255,255,255,0.45)",
          lineHeight: 1.7,
          margin: 0,
        }}
      >
        {op.desc}
      </p>

      <div
        style={{
          position: "absolute",
          bottom: 16,
          left: 22,
          right: 22,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span
          style={{
            fontFamily: "'Share Tech Mono',monospace",
            fontSize: 12,
            color: op.color,
            fontWeight: 600,
          }}
        >
          {op.metric}
        </span>
        <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
          <motion.div
            animate={{ opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.4, repeat: Infinity }}
            style={{
              width: 5,
              height: 5,
              borderRadius: "50%",
              background: "#28c840",
            }}
          />
          <span
            style={{
              fontFamily: "'Share Tech Mono',monospace",
              fontSize: 9,
              color: "rgba(40,200,64,0.6)",
              letterSpacing: "0.1em",
            }}
          >
            LIVE
          </span>
        </div>
      </div>
    </motion.div>
  );
}

function EcosystemSection() {
  const [ref, visible] = useOnScreen();
  return (
    <section
      ref={ref}
      style={{
        position: "relative",
        zIndex: 5,
        padding: "100px 20px 80px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <motion.p
        initial={{ opacity: 0 }}
        animate={visible ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
        style={{
          fontFamily: "'Share Tech Mono',monospace",
          fontSize: 11,
          color: GA(0.5),
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          marginBottom: 14,
          textAlign: "center",
        }}
      >
        [ ECOSSISTEMA :: SKIN_IN_THE_GAME ]
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        animate={visible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        style={{
          fontFamily: "'DM Sans',sans-serif",
          fontWeight: 300,
          fontSize: "clamp(24px,3.5vw,38px)",
          textAlign: "center",
          lineHeight: 1.35,
          color: "rgba(255,255,255,0.9)",
          marginBottom: 12,
          maxWidth: 640,
        }}
      >
        Eu não vendo cursos de quem nunca operou.{" "}
        <strong style={{ fontWeight: 700, color: G }}>
          Eu opero o que vendo.
        </strong>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={visible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
        style={{
          fontFamily: "'DM Sans',sans-serif",
          fontWeight: 300,
          fontSize: "clamp(14px,1.8vw,16px)",
          textAlign: "center",
          color: "rgba(255,255,255,0.38)",
          marginBottom: 56,
          maxWidth: 520,
          lineHeight: 1.7,
        }}
      >
        Cada uma dessas empresas é um laboratório onde testo as estratégias que
        implemento na sua.
      </motion.p>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 16,
          width: "100%",
          maxWidth: 920,
          marginBottom: 48,
        }}
      >
        {OPERATIONS.map((op, i) => (
          <OperationCard key={i} op={op} index={i} isVisible={visible} />
        ))}
      </div>
    </section>
  );
}

// ═════════════════════════════════════════════════════
//  SECTION 4 — INFOPRODUTO: FRAMEWORK BUILDER
// ═════════════════════════════════════════════════════
function FrameworkSection() {
  const [ref, visible] = useOnScreen();
  return (
    <section
      ref={ref}
      style={{
        position: "relative",
        zIndex: 5,
        padding: "100px 20px 80px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <motion.p
        initial={{ opacity: 0 }}
        animate={visible ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
        style={{
          fontFamily: "'Share Tech Mono',monospace",
          fontSize: 11,
          color: CA(0.5),
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          marginBottom: 14,
          textAlign: "center",
        }}
      >
        [ PRODUTO :: FRAMEWORK_BUILDER ]
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={visible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        style={{
          width: "100%",
          maxWidth: 760,
          background: "rgba(6,6,10,0.8)",
          border: `1px solid ${CA(0.15)}`,
          borderRadius: 10,
          padding: "48px 40px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <motion.div
          initial={{ scaleX: 0, transformOrigin: "left" }}
          animate={visible ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 2,
            background: `linear-gradient(90deg,${CYAN},${G})`,
          }}
        />

        <div style={{ display: "flex", gap: 32, flexWrap: "wrap", alignItems: "center" }}>
          <div style={{ flex: "1 1 340px" }}>
            <h2
              style={{
                fontFamily: "'DM Sans',sans-serif",
                fontWeight: 300,
                fontSize: "clamp(24px,3.5vw,34px)",
                lineHeight: 1.3,
                color: "rgba(255,255,255,0.9)",
                marginBottom: 16,
              }}
            >
              Pare de seguir{" "}
              <span
                style={{
                  color: "rgba(255,255,255,0.3)",
                  textDecoration: "line-through",
                  textDecorationColor: "rgba(255,255,255,0.15)",
                }}
              >
                "hacks"
              </span>
              .<br />
              Comece a criar{" "}
              <strong style={{ fontWeight: 700, color: CYAN }}>
                Frameworks.
              </strong>
            </h2>

            <p
              style={{
                fontFamily: "'DM Sans',sans-serif",
                fontWeight: 300,
                fontSize: "clamp(14px,1.8vw,16px)",
                color: "rgba(255,255,255,0.45)",
                lineHeight: 1.8,
                marginBottom: 24,
              }}
            >
              Um treinamento prático de como estruturar uma metodologia do zero.
              Aprenda a transformar seu conhecimento em um{" "}
              <strong style={{ color: "rgba(255,255,255,0.8)", fontWeight: 500 }}>
                ativo replicável e escalável
              </strong>
              .
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 28 }}>
              {[
                "Estruture sua metodologia proprietária",
                "Transforme experiência em produto digital",
                "Escale sem depender só de tempo",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  animate={visible ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.35 }}
                  style={{ display: "flex", alignItems: "center", gap: 10 }}
                >
                  <span style={{ color: CYAN, fontSize: 12 }}>◆</span>
                  <span
                    style={{
                      fontFamily: "'DM Sans',sans-serif",
                      fontSize: 14,
                      color: "rgba(255,255,255,0.6)",
                    }}
                  >
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>

            <CtaButton label="Quero Criar Meu Próprio Framework" variant="secondary" />
          </div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={visible ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            style={{
              flex: "0 0 200px",
              height: 200,
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Rotating rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              style={{
                position: "absolute",
                width: 180,
                height: 180,
                borderRadius: "50%",
                border: `1px solid ${CA(0.15)}`,
              }}
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              style={{
                position: "absolute",
                width: 140,
                height: 140,
                borderRadius: "50%",
                border: `1px dashed ${GA(0.15)}`,
              }}
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              style={{
                position: "absolute",
                width: 100,
                height: 100,
                borderRadius: "50%",
                border: `1px solid ${CA(0.1)}`,
              }}
            />
            <div
              style={{
                fontFamily: "'Barlow Condensed',sans-serif",
                fontWeight: 900,
                fontSize: 28,
                color: G,
                textAlign: "center",
                lineHeight: 1.1,
              }}
            >
              FW
              <br />
              <span style={{ fontSize: 10, color: GA(0.5), fontWeight: 400, fontFamily: "'Share Tech Mono',monospace" }}>
                BUILDER
              </span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

// ═════════════════════════════════════════════════════
//  SECTION 5 — QUIZ INTERATIVO
// ═════════════════════════════════════════════════════
const QUIZ_QUESTIONS = [
  {
    q: "Como você define seu público hoje?",
    options: [
      { label: "Intuição e experiência", score: 1 },
      { label: "Dados básicos (idade, cidade)", score: 2 },
      { label: "Dados + comportamento + IA", score: 3 },
    ],
    axis: "Inteligência",
  },
  {
    q: "Quanto tempo gasta em tarefas repetitivas por semana?",
    options: [
      { label: "+15 horas (criativos, relatórios, triagem)", score: 1 },
      { label: "5-15 horas (parcialmente automatizado)", score: 2 },
      { label: "Menos de 5h (automações rodando)", score: 3 },
    ],
    axis: "Sistema",
  },
  {
    q: "Você tem um framework de tráfego validado?",
    options: [
      { label: "Não, vou no feeling", score: 1 },
      { label: "Tenho processos, mas não documentados", score: 2 },
      { label: "Sim, framework testado e otimizado", score: 3 },
    ],
    axis: "Mídia",
  },
  {
    q: "Como está sua presença digital?",
    options: [
      { label: "Básica ou inexistente", score: 1 },
      { label: "Tenho site e redes, mas sem estratégia", score: 2 },
      { label: "Ecossistema integrado e otimizado", score: 3 },
    ],
    axis: "Digital",
  },
];

function RadarChart({ scores, size = 220 }) {
  const axes = ["Mídia", "Inteligência", "Digital", "Autoridade", "Sistema"];
  const center = size / 2;
  const radius = size * 0.38;
  const levels = 3;

  const angleStep = (2 * Math.PI) / axes.length;
  const getPoint = (i, r) => ({
    x: center + r * Math.sin(i * angleStep),
    y: center - r * Math.cos(i * angleStep),
  });

  const userScores = axes.map((a) => scores[a] || 1);
  const maxScores = axes.map(() => 3);

  const userPath = userScores
    .map((s, i) => {
      const p = getPoint(i, (s / 3) * radius);
      return `${i === 0 ? "M" : "L"}${p.x},${p.y}`;
    })
    .join(" ") + "Z";

  const maxPath = maxScores
    .map((s, i) => {
      const p = getPoint(i, (s / 3) * radius);
      return `${i === 0 ? "M" : "L"}${p.x},${p.y}`;
    })
    .join(" ") + "Z";

  return (
    <svg width={size} height={size}>
      {/* Grid lines */}
      {[1, 2, 3].map((level) => (
        <polygon
          key={level}
          points={axes
            .map((_, i) => {
              const p = getPoint(i, (level / levels) * radius);
              return `${p.x},${p.y}`;
            })
            .join(" ")}
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth={0.5}
        />
      ))}

      {/* Axis lines */}
      {axes.map((_, i) => {
        const p = getPoint(i, radius);
        return (
          <line
            key={i}
            x1={center}
            y1={center}
            x2={p.x}
            y2={p.y}
            stroke="rgba(255,255,255,0.06)"
            strokeWidth={0.5}
          />
        );
      })}

      {/* Ideal area */}
      <motion.path
        d={maxPath}
        fill={GA(0.05)}
        stroke={GA(0.2)}
        strokeWidth={1}
        strokeDasharray="4 4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      />

      {/* User area */}
      <motion.path
        d={userPath}
        fill={CA(0.12)}
        stroke={CYAN}
        strokeWidth={1.5}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
      />

      {/* User dots */}
      {userScores.map((s, i) => {
        const p = getPoint(i, (s / 3) * radius);
        return (
          <motion.circle
            key={i}
            cx={p.x}
            cy={p.y}
            r={3}
            fill={CYAN}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 + i * 0.1, duration: 0.3 }}
          />
        );
      })}

      {/* Labels */}
      {axes.map((label, i) => {
        const p = getPoint(i, radius + 22);
        return (
          <text
            key={i}
            x={p.x}
            y={p.y}
            textAnchor="middle"
            dominantBaseline="middle"
            style={{
              fontFamily: "'Share Tech Mono',monospace",
              fontSize: 9,
              fill: "rgba(255,255,255,0.4)",
              letterSpacing: "0.08em",
            }}
          >
            {label}
          </text>
        );
      })}
    </svg>
  );
}

function QuizSection({ quizRef }) {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [step, setStep] = useState(-1); // -1 = intro, 0-3 = questions, 4 = whatsapp capture, 5 = processing, 6 = result
  const [answers, setAnswers] = useState({});
  const [loadPct, setLoadPct] = useState(0);
  const [whatsapp, setWhatsapp] = useState("");

  // Intersection observer for animations
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Forward ref for scroll-to-quiz
  useEffect(() => {
    if (quizRef && sectionRef.current) {
      quizRef.current = sectionRef.current;
    }
  }, [quizRef]);

  const handleAnswer = (questionIndex, option) => {
    const axis = QUIZ_QUESTIONS[questionIndex].axis;
    setAnswers((prev) => ({ ...prev, [axis]: option.score }));
    if (questionIndex < QUIZ_QUESTIONS.length - 1) {
      setStep(questionIndex + 1);
    } else {
      setStep(4); // whatsapp capture
    }
  };

  const handleWhatsappSubmit = () => {
    if (whatsapp.trim().length < 8) return;
    setStep(5); // processing
  };

  useEffect(() => {
    if (step !== 5) return;
    let pct = 0;
    const id = setInterval(() => {
      pct += Math.random() * 8 + 2;
      setLoadPct(Math.min(pct, 100));
      if (pct >= 100) {
        clearInterval(id);
        setTimeout(() => setStep(6), 600);
      }
    }, 120);
    return () => clearInterval(id);
  }, [step]);

  const totalScore = Object.values(answers).reduce((a, b) => a + b, 0);
  const maxScore = QUIZ_QUESTIONS.length * 3;
  const pctScore = Math.round((totalScore / maxScore) * 100);

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        zIndex: 5,
        padding: "100px 20px 80px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <motion.p
        initial={{ opacity: 0 }}
        animate={visible ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
        style={{
          fontFamily: "'Share Tech Mono',monospace",
          fontSize: 11,
          color: GA(0.5),
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          marginBottom: 14,
          textAlign: "center",
        }}
      >
        [ DIAGNÓSTICO :: IA_QUIZ ]
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        animate={visible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        style={{
          fontFamily: "'DM Sans',sans-serif",
          fontWeight: 300,
          fontSize: "clamp(24px,3.5vw,36px)",
          textAlign: "center",
          lineHeight: 1.35,
          color: "rgba(255,255,255,0.9)",
          marginBottom: 12,
          maxWidth: 560,
        }}
      >
        Sua Operação é{" "}
        <span style={{ color: "#E74C3C" }}>Escrava</span> ou{" "}
        <strong style={{ fontWeight: 700, color: G }}>Inteligente</strong>?
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={visible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
        style={{
          fontFamily: "'DM Sans',sans-serif",
          fontWeight: 300,
          fontSize: "clamp(14px,1.8vw,16px)",
          textAlign: "center",
          color: "rgba(255,255,255,0.38)",
          marginBottom: 48,
          maxWidth: 460,
          lineHeight: 1.7,
        }}
      >
        Faça o diagnóstico em 2 minutos e descubra.
      </motion.p>

      {/* Quiz Container */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={visible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
        style={{
          width: "100%",
          maxWidth: 640,
          background: "rgba(6,6,10,0.92)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 10,
          overflow: "hidden",
          minHeight: 380,
        }}
      >
        {/* Terminal bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 7,
            padding: "12px 18px",
            background: "rgba(255,255,255,0.03)",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          {["#ff5f57", "#febc2e", "#28c840"].map((c, i) => (
            <div
              key={i}
              style={{
                width: 11,
                height: 11,
                borderRadius: "50%",
                background: c,
                opacity: 0.65,
              }}
            />
          ))}
          <span
            style={{
              marginLeft: 8,
              fontFamily: "'Share Tech Mono',monospace",
              fontSize: 10,
              color: "rgba(255,255,255,0.25)",
              letterSpacing: "0.1em",
            }}
          >
            diagnostico_ia.exe —{" "}
            {step < 0
              ? "standby"
              : step < 4
              ? `pergunta ${step + 1}/${QUIZ_QUESTIONS.length}`
              : step === 4
              ? "captura de contato"
              : step === 5
              ? "processando..."
              : "resultado"}
          </span>
        </div>

        {/* Progress bar */}
        <div style={{ height: 2, background: "rgba(255,255,255,0.04)" }}>
          <motion.div
            animate={{
              width:
                step < 0
                  ? "0%"
                  : step < 4
                  ? `${((step + 1) / QUIZ_QUESTIONS.length) * 80}%`
                  : step === 4
                  ? "85%"
                  : "100%",
            }}
            transition={{ duration: 0.4 }}
            style={{
              height: "100%",
              background:
                step >= 5
                  ? `linear-gradient(90deg,${CYAN},${G})`
                  : `linear-gradient(90deg,${G},${GA(0.6)})`,
            }}
          />
        </div>

        <div style={{ padding: "32px 28px" }}>
          <AnimatePresence mode="wait">
            {/* INTRO */}
            {step === -1 && (
              <motion.div
                key="intro"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                style={{ textAlign: "center" }}
              >
                <div
                  style={{
                    fontFamily: "'Share Tech Mono',monospace",
                    fontSize: 48,
                    color: GA(0.15),
                    marginBottom: 16,
                  }}
                >
                  ◎
                </div>
                <p
                  style={{
                    fontFamily: "'DM Sans',sans-serif",
                    fontWeight: 300,
                    fontSize: 16,
                    color: "rgba(255,255,255,0.5)",
                    lineHeight: 1.7,
                    marginBottom: 28,
                  }}
                >
                  4 perguntas rápidas para mapear o nível de inteligência da
                  sua operação.
                </p>
                <CtaButton
                  label="▶ Iniciar Diagnóstico"
                  onClick={() => setStep(0)}
                />
              </motion.div>
            )}

            {/* QUESTIONS */}
            {step >= 0 && step < QUIZ_QUESTIONS.length && (
              <motion.div
                key={`q-${step}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  style={{
                    fontFamily: "'Share Tech Mono',monospace",
                    fontSize: 10,
                    color: GA(0.4),
                    letterSpacing: "0.12em",
                    marginBottom: 16,
                  }}
                >
                  // EIXO: {QUIZ_QUESTIONS[step].axis.toUpperCase()}
                </div>
                <h3
                  style={{
                    fontFamily: "'DM Sans',sans-serif",
                    fontWeight: 500,
                    fontSize: "clamp(18px,2.5vw,22px)",
                    color: "rgba(255,255,255,0.88)",
                    lineHeight: 1.4,
                    marginBottom: 28,
                  }}
                >
                  {QUIZ_QUESTIONS[step].q}
                </h3>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                  }}
                >
                  {QUIZ_QUESTIONS[step].options.map((opt, i) => (
                    <QuizOption
                      key={i}
                      option={opt}
                      index={i}
                      onClick={() => handleAnswer(step, opt)}
                    />
                  ))}
                </div>
              </motion.div>
            )}

            {/* WHATSAPP CAPTURE */}
            {step === 4 && (
              <motion.div
                key="whatsapp"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                style={{ textAlign: "center", padding: "16px 0" }}
              >
                <div
                  style={{
                    fontFamily: "'Share Tech Mono',monospace",
                    fontSize: 10,
                    color: GA(0.4),
                    letterSpacing: "0.12em",
                    marginBottom: 20,
                  }}
                >
                  // ANÁLISE PRONTA — INSIRA SEU CONTATO PARA LIBERAR
                </div>
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    background: GA(0.08),
                    border: `1px solid ${GA(0.2)}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 20px",
                    fontSize: 24,
                  }}
                >
                  🔒
                </div>
                <h3
                  style={{
                    fontFamily: "'DM Sans',sans-serif",
                    fontWeight: 500,
                    fontSize: 18,
                    color: "rgba(255,255,255,0.85)",
                    marginBottom: 8,
                  }}
                >
                  Seu diagnóstico está pronto!
                </h3>
                <p
                  style={{
                    fontFamily: "'DM Sans',sans-serif",
                    fontWeight: 300,
                    fontSize: 14,
                    color: "rgba(255,255,255,0.42)",
                    lineHeight: 1.7,
                    marginBottom: 28,
                    maxWidth: 380,
                    margin: "0 auto 28px",
                  }}
                >
                  Insira seu WhatsApp para liberar o resultado completo com gráfico de radar + sugestão personalizada de ferramenta de IA para o seu nicho.
                </p>
                <div
                  style={{
                    display: "flex",
                    gap: 10,
                    maxWidth: 360,
                    margin: "0 auto",
                  }}
                >
                  <input
                    type="text"
                    placeholder="(00) 00000-0000"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleWhatsappSubmit()}
                    style={{
                      flex: 1,
                      padding: "12px 14px",
                      background: "rgba(255,255,255,0.04)",
                      border: `1px solid ${whatsapp.trim().length >= 8 ? GA(0.3) : "rgba(255,255,255,0.1)"}`,
                      borderRadius: 4,
                      color: "#fff",
                      fontFamily: "'DM Sans',sans-serif",
                      fontSize: 14,
                      outline: "none",
                      transition: "border-color 0.2s",
                    }}
                  />
                  <CtaButton label="Liberar" onClick={handleWhatsappSubmit} />
                </div>
                <p
                  style={{
                    fontFamily: "'Share Tech Mono',monospace",
                    fontSize: 9,
                    color: "rgba(255,255,255,0.18)",
                    marginTop: 14,
                    letterSpacing: "0.06em",
                  }}
                >
                  // seus dados estão seguros · sem spam · prometido
                </p>
              </motion.div>
            )}

            {/* PROCESSING */}
            {step === 5 && (
              <motion.div
                key="processing"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{ textAlign: "center", padding: "32px 0" }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    border: `2px solid ${GA(0.15)}`,
                    borderTopColor: G,
                    margin: "0 auto 24px",
                  }}
                />
                <p
                  style={{
                    fontFamily: "'Share Tech Mono',monospace",
                    fontSize: 13,
                    color: GA(0.6),
                    letterSpacing: "0.08em",
                    marginBottom: 16,
                  }}
                >
                  Processando dados...
                </p>
                <div
                  style={{
                    width: "80%",
                    height: 3,
                    background: "rgba(255,255,255,0.06)",
                    borderRadius: 2,
                    margin: "0 auto",
                    overflow: "hidden",
                  }}
                >
                  <motion.div
                    animate={{ width: `${loadPct}%` }}
                    style={{
                      height: "100%",
                      background: `linear-gradient(90deg,${G},${CYAN})`,
                      borderRadius: 2,
                    }}
                  />
                </div>
                <p
                  style={{
                    fontFamily: "'Share Tech Mono',monospace",
                    fontSize: 10,
                    color: "rgba(255,255,255,0.2)",
                    marginTop: 12,
                  }}
                >
                  {Math.round(loadPct)}% — Calibrando radar M.I.D.A.S
                </p>
              </motion.div>
            )}

            {/* RESULT */}
            {step === 6 && (
              <motion.div
                key="result"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: 32,
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <RadarChart scores={answers} />
                  <div style={{ flex: "1 1 220px", minWidth: 200 }}>
                    <div
                      style={{
                        fontFamily: "'Share Tech Mono',monospace",
                        fontSize: 10,
                        color: GA(0.4),
                        letterSpacing: "0.12em",
                        marginBottom: 12,
                      }}
                    >
                      // RESULTADO DO DIAGNÓSTICO
                    </div>
                    <div
                      style={{
                        fontFamily: "'Barlow Condensed',sans-serif",
                        fontWeight: 900,
                        fontSize: 48,
                        color: pctScore >= 66 ? "#28c840" : pctScore >= 40 ? G : "#E74C3C",
                        lineHeight: 1,
                        marginBottom: 4,
                      }}
                    >
                      {pctScore}%
                    </div>
                    <p
                      style={{
                        fontFamily: "'DM Sans',sans-serif",
                        fontWeight: 500,
                        fontSize: 15,
                        color: "rgba(255,255,255,0.7)",
                        marginBottom: 8,
                      }}
                    >
                      {pctScore >= 66
                        ? "Operação Inteligente"
                        : pctScore >= 40
                        ? "Operação em Transição"
                        : "Operação Manual"}
                    </p>
                    <p
                      style={{
                        fontFamily: "'DM Sans',sans-serif",
                        fontWeight: 300,
                        fontSize: 13,
                        color: "rgba(255,255,255,0.4)",
                        lineHeight: 1.7,
                        marginBottom: 24,
                      }}
                    >
                      {pctScore >= 66
                        ? "Sua operação já tem boas bases. O próximo nível é otimizar com IA avançada."
                        : pctScore >= 40
                        ? "Você tem processos, mas está deixando potencial na mesa. IA pode acelerar 3x."
                        : "Sua operação depende demais de você. Automatizar é urgente para escalar."}
                    </p>

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 10,
                        marginTop: 8,
                      }}
                    >
                      <CtaButton label="Agendar Reunião M.I.D.A.S" />
                      <p
                        style={{
                          fontFamily: "'Share Tech Mono',monospace",
                          fontSize: 9,
                          color: "rgba(255,255,255,0.2)",
                          margin: 0,
                          letterSpacing: "0.06em",
                        }}
                      >
                        // relatório completo enviado para seu WhatsApp
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}

function QuizOption({ option, index, onClick }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      whileHover={{ x: 4 }}
      whileTap={{ scale: 0.98 }}
      style={{
        width: "100%",
        padding: "16px 18px",
        background: hovered ? GA(0.08) : "rgba(255,255,255,0.02)",
        border: `1px solid ${hovered ? GA(0.3) : "rgba(255,255,255,0.07)"}`,
        borderRadius: 6,
        cursor: "pointer",
        textAlign: "left",
        display: "flex",
        alignItems: "center",
        gap: 14,
        transition: "background 0.2s, border-color 0.2s",
      }}
    >
      <span
        style={{
          fontFamily: "'Share Tech Mono',monospace",
          fontSize: 10,
          color: hovered ? G : "rgba(255,255,255,0.25)",
          flexShrink: 0,
          width: 20,
          textAlign: "center",
          transition: "color 0.2s",
        }}
      >
        {String.fromCharCode(65 + index)}
      </span>
      <span
        style={{
          fontFamily: "'DM Sans',sans-serif",
          fontSize: 14,
          color: hovered ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.55)",
          transition: "color 0.2s",
        }}
      >
        {option.label}
      </span>
    </motion.button>
  );
}

// ═════════════════════════════════════════════════════
//  SECTION 6 — FOOTER & CONTACT
// ═════════════════════════════════════════════════════
function FooterSection() {
  const [ref, visible] = useOnScreen();
  const [form, setForm] = useState({
    nome: "",
    empresa: "",
    site: "",
    gargalo: "",
  });

  return (
    <section
      ref={ref}
      style={{
        position: "relative",
        zIndex: 5,
        padding: "100px 20px 60px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <motion.p
        initial={{ opacity: 0 }}
        animate={visible ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
        style={{
          fontFamily: "'Share Tech Mono',monospace",
          fontSize: 11,
          color: GA(0.5),
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          marginBottom: 14,
          textAlign: "center",
        }}
      >
        [ MÓDULO :: CONTATO ]
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        animate={visible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        style={{
          fontFamily: "'DM Sans',sans-serif",
          fontWeight: 300,
          fontSize: "clamp(24px,3.5vw,34px)",
          textAlign: "center",
          lineHeight: 1.35,
          color: "rgba(255,255,255,0.9)",
          marginBottom: 48,
          maxWidth: 520,
        }}
      >
        Pronto para transformar sua{" "}
        <strong style={{ fontWeight: 700, color: G }}>operação</strong>?
      </motion.h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          maxWidth: 600,
          marginBottom: 56,
        }}
      >
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{
            width: "100%",
            background: "rgba(6,6,10,0.8)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 8,
            padding: "32px 28px",
          }}
        >
          <div
            style={{
              fontFamily: "'Share Tech Mono',monospace",
              fontSize: 10,
              color: "rgba(255,255,255,0.25)",
              letterSpacing: "0.12em",
              marginBottom: 20,
            }}
          >
            // FORMULÁRIO DE CONTATO
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {[
              { key: "nome", label: "Nome", placeholder: "Seu nome" },
              { key: "empresa", label: "Empresa", placeholder: "Nome da empresa" },
              { key: "site", label: "Site", placeholder: "https://" },
            ].map(({ key, label, placeholder }) => (
              <div key={key}>
                <label
                  style={{
                    fontFamily: "'Share Tech Mono',monospace",
                    fontSize: 10,
                    color: "rgba(255,255,255,0.3)",
                    letterSpacing: "0.1em",
                    display: "block",
                    marginBottom: 6,
                  }}
                >
                  {label}
                </label>
                <input
                  type="text"
                  placeholder={placeholder}
                  value={form[key]}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, [key]: e.target.value }))
                  }
                  style={{
                    width: "100%",
                    padding: "11px 14px",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 4,
                    color: "#fff",
                    fontFamily: "'DM Sans',sans-serif",
                    fontSize: 14,
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                />
              </div>
            ))}

            <div>
              <label
                style={{
                  fontFamily: "'Share Tech Mono',monospace",
                  fontSize: 10,
                  color: "rgba(255,255,255,0.3)",
                  letterSpacing: "0.1em",
                  display: "block",
                  marginBottom: 6,
                }}
              >
                Qual o gargalo da sua operação hoje?
              </label>
              <textarea
                placeholder="Descreva em poucas palavras..."
                value={form.gargalo}
                onChange={(e) =>
                  setForm((p) => ({ ...p, gargalo: e.target.value }))
                }
                rows={3}
                style={{
                  width: "100%",
                  padding: "11px 14px",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 4,
                  color: "#fff",
                  fontFamily: "'DM Sans',sans-serif",
                  fontSize: 14,
                  outline: "none",
                  resize: "vertical",
                  boxSizing: "border-box",
                }}
              />
            </div>

            <CtaButton label="Enviar Mensagem" />
          </div>
        </motion.div>
      </div>

      {/* Social & Credits */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={visible ? { opacity: 1 } : {}}
        transition={{ delay: 0.5, duration: 0.5 }}
        style={{
          width: "100%",
          maxWidth: 880,
          borderTop: "1px solid rgba(255,255,255,0.06)",
          paddingTop: 32,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <div>
          <div
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              fontSize: 20,
              color: "#fff",
              letterSpacing: "0.05em",
              marginBottom: 4,
            }}
          >
            <span style={{ color: G }}>@</span>odaniellz
          </div>
          <p
            style={{
              fontFamily: "'DM Sans',sans-serif",
              fontWeight: 300,
              fontSize: 13,
              color: "rgba(255,255,255,0.35)",
              margin: 0,
            }}
          >
            Acompanhe a documentação diária dessa jornada no Instagram.
          </p>
        </div>
        <div
          style={{
            fontFamily: "'Share Tech Mono',monospace",
            fontSize: 10,
            color: "rgba(255,255,255,0.15)",
            letterSpacing: "0.08em",
            textAlign: "right",
          }}
        >
          <div>// M.I.D.A.S FRAMEWORK v3.1</div>
          <div>// {new Date().getFullYear()} · DANIEL LZ</div>
        </div>
      </motion.div>
    </section>
  );
}

// ═════════════════════════════════════════════════════
//  APP — MAIN
// ═════════════════════════════════════════════════════
export default function App() {
  const [booted, setBooted] = useState(false);
  const quizRef = useRef(null);

  const scrollToQuiz = () => {
    if (quizRef.current) {
      quizRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div
      style={{
        background: "#06060c",
        minHeight: "100vh",
        color: "#fff",
        overflowX: "hidden",
        fontFamily: "'DM Sans',sans-serif",
      }}
    >
      <BootScreen onDone={() => setBooted(true)} />
      <NeuralBackground />
      <Scanline />

      {booted && (
        <>
          <HudCorner pos="tl" delay={BD + 0.8} />
          <HudCorner pos="tr" delay={BD + 0.9} />
          <HudCorner pos="bl" delay={BD + 1.0} />
          <HudCorner pos="br" delay={BD + 1.1} />
        </>
      )}

      {/* S1 — HERO */}
      <HeroSection booted={booted} onQuizStart={scrollToQuiz} />

      {/* S2 — CONSULTORIA M.I.D.A.S */}
      <MidasSection />

      {/* S3 — ECOSSISTEMA */}
      <EcosystemSection />

      {/* S4 — INFOPRODUTO */}
      <FrameworkSection />

      {/* S5 — QUIZ */}
      <QuizSection quizRef={quizRef} />

      {/* S6 — FOOTER */}
      <FooterSection />

      {/* Scroll hint */}
      {booted && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: BD + 4 }}
          style={{
            position: "fixed",
            bottom: 20,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 4,
            zIndex: 10,
          }}
        >
          <motion.div
            style={{
              width: 1,
              height: 30,
              background: `linear-gradient(to bottom,${G},transparent)`,
            }}
            animate={{ opacity: [0.2, 0.85, 0.2] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span
            style={{
              fontFamily: "'Share Tech Mono',monospace",
              fontSize: 8,
              letterSpacing: "0.16em",
              color: "rgba(255,255,255,.14)",
              textTransform: "uppercase",
            }}
          >
            scroll
          </span>
        </motion.div>
      )}
    </div>
  );
}
