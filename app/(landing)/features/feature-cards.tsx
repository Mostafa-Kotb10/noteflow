"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";

const cards = [
    {
        title: "Text Card",
        component: <TextCard description="Hello world" />
    },
    {
        title: "Image Card",
        component: <ImageCard image="/sample.jpg" />
    },
    {
        title: "List Card",
        component: <ListCard items={["Fast", "Secure", "Scalable"]} />
    }
];

function FeatureCards() {
    const [currentStep, setCurrentStep] = useState(0);
    const cardRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({ repeat: Infinity });

        cards.forEach((_, i) => {
            tl.to(".main-card", {
                z: 32,
                y: -8,
                duration: 2,
                ease: "power1.inOut",
                force3D: true,
                onStart: () => setCurrentStep(i),
            })
            .to(".main-card", {
                z: 8,
                y: -2,
                duration: 2,
                ease: "power1.inOut",
                force3D: true,
            });
        });
    }, { scope: cardRef });

    return (
        <div
            ref={cardRef}
            style={{
                transformStyle: "preserve-3d",
                transform: "rotateY(-30deg) rotateX(15deg)",
            }}
            className="relative w-full max-w-xl mx-auto"
        >
            {/* Shadow cards */}
            <div className="absolute inset-0 translate-y-6 translate-x-6 border border-gray-400 rounded-4xl bg-white" />
            <div className="absolute inset-0 translate-y-3 translate-x-3 border border-gray-500 rounded-4xl bg-white" />

            {/* Main card */}
            <div
                className="main-card relative border border-gray-700 rounded-4xl bg-white z-30 p-8 h-[50dvh]"
                style={{ willChange: "transform" }}
            >
                <h2 className="text-2xl font-semibold">
                    {cards[currentStep].title}
                </h2>
                {cards[currentStep].component}
            </div>
        </div>
    );
}

function TextCard({ description }: { description: string }) {
    return <div>
        <p className="mt-4 text-gray-600">{description}</p>
    </div>;
}

function ImageCard({ image }: { image: string }) {
    return (
        <img src={image} alt="" className="mt-4 w-full rounded-xl object-cover" />
    );
}

function ListCard({ items }: { items: string[] }) {
    return (
        <ul className="mt-4 space-y-2 text-gray-600">
            {items.map((item, i) => (
                <li key={i}>• {item}</li>
            ))}
        </ul>
    );
}

export default FeatureCards;