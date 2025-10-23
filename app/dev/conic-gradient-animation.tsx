"use client";

import { motion } from "framer-motion";

interface ConicGradientAnimationProps {
  width?: string | number;
  height?: string | number;
  borderColor?: string;
  animationDuration?: number;
  blurRadius?: number;
  borderRadius?: number;
  backgroundColor?: string;
  overlayBorderColor?: string;
  overlayMargin?: number;
  text?: string;
  textColor?: string;
  fontSize?: number;
  fontWeight?: number;
  letterSpacing?: number;
  children?: React.ReactNode;
}

export default function ConicGradientAnimation({
  width,
  height,
  borderColor = "#ff00ff",
  animationDuration = 6,
  blurRadius = 2,
  borderRadius = 0,
  backgroundColor = "rgba(255, 255, 255, 0.1)",
  overlayBorderColor = "#ff00ff",
  overlayMargin = 1,
  text = "Rotating Border",
  textColor = "#000000",
  fontSize = 16,
  fontWeight = 400,
  letterSpacing = 0,
  children,
}: ConicGradientAnimationProps) {
  return (
    <div
      style={{
        width: width || "100%",
        height: height || "100%",
        position: "relative",
        overflow: "hidden",
        borderRadius: `${borderRadius}px`,
        minWidth: "12px",
        minHeight: "12px",
      }}
    >
      <motion.div
        style={{
          position: "absolute",
          top: "-450%",
          left: 0,
          right: 0,
          bottom: 0,
          height: "1000%",
          background: `conic-gradient(transparent 200deg, ${borderColor})`,
          borderRadius: `${borderRadius}px`,
          zIndex: 1,
        }}
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{
          duration: animationDuration,
          ease: "linear",
          repeat: Infinity,
          repeatDelay: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: `${overlayMargin}px`,
          left: `${overlayMargin}px`,
          right: `${overlayMargin}px`,
          bottom: `${overlayMargin}px`,
          backdropFilter: `blur(${blurRadius}px)`,
          backgroundColor: backgroundColor,
          border: `1px solid ${overlayBorderColor}`,
          borderRadius: `${Math.max(0, borderRadius - overlayMargin)}px`,
          zIndex: 2,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "relative",
          zIndex: 3,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "8px",
        }}
      >
        <div
          style={{
            color: textColor,
            fontSize: `${fontSize}px`,
            fontWeight: fontWeight,
            letterSpacing: `${letterSpacing}px`,
            textAlign: "center",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            maxWidth: "100%",
            userSelect: "none",
          }}
        >
          {text}
        </div>
        {children}
      </div>
    </div>
  );
}