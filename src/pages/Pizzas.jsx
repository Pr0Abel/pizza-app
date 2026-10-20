
import { pizzas } from "../data/pizzas.js";
import PizzaCard from "../components/PizzaCard.jsx";
import { useState } from "react";

const filters = ["all", "vegetarian", "spicy"];

export default function Pizzas() {
    const [filter, setFilter] = useState("all")

    const handleFilterClick = (f) => {
        //console.log(f)
        setFilter(f)
    }

    return (
        <>
            <h1>Pick your pizza</h1>
            <div className="filters">
                {filters.map((f) => (
                    <button
                        key={f}
                        className={`chip ${filter == f ? "active" : ""}`}
                        onClick={() => { handleFilterClick(f) }}
                    >
                        {f}
                    </button>
                ))}
            </div>
            <div className="grid">
                {pizzas.filter((p) => {
                    return p.tags.includes(filter) || filter === "all"
                }).map((p) => (
                    <PizzaCard key={p.id} pizza={p} />
                ))}
            </div>
        </>
    );
}
