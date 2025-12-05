import React, { use } from "react";
import AgentCard from "../components/AgentCard";
import AgentDemoModal from "../components/AgentDemoModal";

export default function AgentsShowcase() {
    const [agents, setAgents] = useState([]);
    const [demoUrl, setDemoUrl] = useState(null);

    useEffect(() => {
        // Load agent data dynamically from the JSON file
        fetch("/src/data/agents.json")
            .then((res) => res.json())
            .then((data) => setAgents(data))
            .catch((err) => {
                console.error("Error loading agents.json:", err);
                // Fallback data in case fetch fails
                setAgents([
                    {
                        name: "Sales Assistant Agent",
                        description: "An AI agent that assists with sales inquiries and customer interactions.",
                        demoUrl: "https://huggingface.co/spaces/Veraeze/sales-assistant-agent-demo",
                        readme: "https://github