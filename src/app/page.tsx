"use client";
import Image from "next/image";
import Scene from "./scripts/3dscenes/scene";
import { useEffect } from "react";

export default function Home() {
  let scene: Scene;
  useEffect(() => {
    scene = new Scene("test");
    return () => {
      scene.dispose();
    };
  });
  return <div id="test"></div>;
}
