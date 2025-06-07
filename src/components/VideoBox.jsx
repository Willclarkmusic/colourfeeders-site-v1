import React, { useState, useRef, Suspense, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
    OrbitControls,
    Environment,
    MeshReflectorMaterial,
    MeshTransmissionMaterial,
    RoundedBox,
} from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";
import * as THREE from "three";
import { EffectComposer, Bloom, SMAA, SSAO } from "@react-three/postprocessing";

const VideoScene = ({ mute, setMute }) => {
    const [isLoading, setIsLoading] = useState(false);
    const videoUrl = "https://videos.colourfeeders.com/CF-Reel-2025-web.mp4";

    return (
        <div className="items-center h-full w-screen overflow-hidden ">
            {/* 3D Video Player */}
            <Canvas
                shadows
                dpr={[1, 1.5]}
                gl={{ antialias: true }}
                camera={{
                    position: [0, -2, 11],
                    fov: 15,
                }}
            >
                <color attach="background" args={["black"]} />
                <group position={(0, 0, 0)}>
                    <Suspense fallback={null}>
                        <VideoBox
                            videoUrl={videoUrl}
                            isLoading={isLoading}
                            mute={mute}
                            setMute={setMute}
                        />
                    </Suspense>
                </group>
                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    enableRotate={true}
                    maxPolarAngle={1.5}
                    minPolarAngle={1.1}
                    maxAzimuthAngle={0.5}
                    minAzimuthAngle={-0.5}
                    autoRotate
                    autoRotateSpeed={0.5}
                />

                <Environment
                    preset="city"
                    environmentIntensity={0.9}
                    antialias={true}
                    backgroundBlurriness={0} // optional blur factor between 0 and 1 (default: 0, only works with three 0.146 and up)
                />
                <Suspense fallback={null}>
                    <EffectComposer>
                        <SMAA />
                    </EffectComposer>
                </Suspense>
            </Canvas>
        </div>
    );
};
function VideoBox({ videoUrl, mute, setMute }) {
    const { viewport } = useThree();
    const [videoReady, setVideoReady] = useState(false);

    const [video] = useState(() => {
        const vid = document.createElement("video");
        vid.crossOrigin = "anonymous";
        vid.loop = true;
        vid.muted = mute;
        vid.playsInline = true;
        return vid;
    });

    useEffect(() => {
        video.src = videoUrl;
    }, [video, videoUrl]);

    useEffect(() => {
        if (!mute) {
            video.muted = false;
        } else {
            video.muted = true;
        }
    }, [mute, video]);

    useEffect(() => {
        video.play().catch(console.error);
    }, [video]);

    return (
        <group
            scale={viewport.width > 5 ? 1 : viewport.width / 5}
            position={(0, 0, 0)}
        >
            <mesh>
                <planeGeometry args={[4, 2.25]} scale={1.1} />
                <meshStandardMaterial
                    side={THREE.DoubleSide}
                    emissive={"white"}
                    emissiveIntensity={0.3}
                    toneMapped={true}
                >
                    <videoTexture attach="map" args={[video]} anisotropy={10} />
                    <videoTexture
                        attach="emissiveMap"
                        args={[video]}
                        side={THREE.DoubleSide}
                    />
                </meshStandardMaterial>
            </mesh>
            <RoundedBox
                receiveShadow
                castShadow
                smoothness={1}
                radius={0.01}
                args={[4, 2.25, 0.4]}
                position={[0, 0, -0.201]}
            >
                <MeshTransmissionMaterial
                    transmission={1.1}
                    roughness={0.3}
                    clearcoat={0.2}
                    thickness={1}
                    samples={8}
                    resolution={256}
                />
            </RoundedBox>
            <Flooring />
        </group>
    );
}

function Flooring() {
    return (
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={(0, 0, -1.13)}>
            <planeGeometry args={[50, 50]} />
            <MeshReflectorMaterial
                blur={[300, 100]}
                resolution={2048}
                mixBlur={0.5}
                mixStrength={80}
                roughness={0.9}
                depthScale={1.2}
                minDepthThreshold={0.4}
                maxDepthThreshold={1.4}
                color="#090909"
                metalness={1}
            />
        </mesh>
    );
}

export default VideoScene;
