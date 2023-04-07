import {Suspense, useEffect, useState, useRef} from 'react';
import { extend } from '@react-three/fiber';
import { Mesh } from 'three';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';


interface computersProps {
    isMobile: boolean
}

const Computers = (isMobile: computersProps) => {
    const computer = useGLTF('./workbench/scene.gltf');
    const ref = useRef<Mesh>(null!)

    return (
        <mesh ref={ref}>
            <primitive object={computer.scene} scale={2.4} position={isMobile.isMobile ? [0, -1.2, 0] : [0,-2,0]}/>
        </mesh>
    )
}

const ComputerCanvas = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 1023px)');

        setIsMobile(mediaQuery.matches);

        const handleMediaQueryChange = (event: MediaQueryListEvent) => {
            setIsMobile(event.matches);
        }

        mediaQuery.addEventListener('change', handleMediaQueryChange);

        return () => {
            mediaQuery.removeEventListener('change', handleMediaQueryChange);
        }
    }, []);

    return (
        <Canvas
            frameloop='demand'
            shadows
            camera={{position: [20,2,10], fov: isMobile ? 25 : 35}}
            className='lg:w-[60%] w-[100%] h-[100%]' 
            style={{width: ''}}
            gl={{preserveDrawingBuffer: true}}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls 
                    enableZoom={false}
                    maxPolarAngle={Math.PI/3}
                    minPolarAngle={Math.PI/3}
                    minAzimuthAngle={Math.PI - Math.PI}
                    maxAzimuthAngle={Math.PI}
                />
                <Computers isMobile={isMobile}/>
            </Suspense>

            <Preload all />
        </Canvas>
    )
}

export default ComputerCanvas