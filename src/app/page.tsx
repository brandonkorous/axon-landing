import Hero from "./components/Hero";
import Features from "./components/Features";
import Integrations from "./components/Integrations";
import Showcase from "./components/Showcase";
import Community from "./components/Community";
import Documentation from "./components/Documentation";
import Blog from "./components/Blog";

export default function Home() {
    return (
        <>
            <Hero />
            <Features />
            <Integrations />
            <Showcase />
            <Community />
            <Documentation />
            <Blog />
        </>
    );
}
