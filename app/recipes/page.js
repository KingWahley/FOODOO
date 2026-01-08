"use client";
import Navbar from "../../components/Navbar";
import Link from "next/link";
import Footer from "../../components/Footer";
import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Search, Play, MapPin, SlidersHorizontal } from "lucide-react";
import { recipes } from "../../components/recipes/data";

export default function RecipesPage() {
  const [search, setSearch] = useState("");
  const [active, setActive] = useState("recommend");
  const router = useRouter();

  const filteredRecipes = useMemo(() => {
    return recipes.filter((r) => {
      const matchSearch = r.title.toLowerCase().includes(search.toLowerCase());

      const matchCategory = active === "recommend" || r.category === active;

      return matchSearch && matchCategory;
    });
  }, [search, active]);

  return (
    <div>
      <Navbar />
      <main className="min-h-screen bg-gray-50 px-4 pb-28">
        <div className="sticky top-20 z-20 mt-5 bg-white">
          <div className=" flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-sm">
            <Search size={16} className="text-gray-400" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by food name"
              className="w-full outline-none text-sm bg-transparent"
            />
            <button className="text-gray-400">
              <SlidersHorizontal size={16} />
            </button>
          </div>
          <div className="mt-6 flex gap-3 overflow-x-auto pb-1">
            {[
              { id: "recommend", label: "Recommend" },
              { id: "ramen", label: "Ramen" },
              { id: "ice", label: "Ice Cream" },
            ].map((c) => (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                className={`px-5 py-2 rounded-full text-xs font-medium shrink-0 ${
                  active === c.id
                    ? "bg-orange-500 text-white"
                    : "bg-white text-gray-500 shadow-sm"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 bg-orange-500 rounded-2xl p-5 flex items-center justify-between text-white">
          <div>
            <h2 className="text-lg font-semibold leading-tight">
              Find your food <br /> recipe easily
            </h2>
            <button className="mt-4 flex items-center gap-2 bg-white text-orange-500 text-xs px-4 py-2 rounded-full font-medium">
              <Play size={12} />
              Watch
            </button>
          </div>
        </div>

        <h3 className="mt-6 text-sm font-semibold text-gray-700">
          Based on the type of food you like
        </h3>

        <section className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
          {filteredRecipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white rounded-2xl p-3 shadow-sm text-left"
            >
              <div
                onClick={() => router.push(`/recipes/${recipe.id}`)}
                className="cursor-pointer"
              >
                <div className="relative h-28 mb-3">
                  <Image
                    src={recipe.image}
                    alt={recipe.title}
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>

                <h4 className="text-sm font-semibold leading-tight">
                  {recipe.title}
                </h4>

                <p className="text-xs text-gray-400 mt-1">{recipe.calories}</p>
              </div>

              <div className="mt-3 flex items-center justify-between">
                <button
                  onClick={() => window.open(recipe.video, "_blank")}
                  className="
            flex items-center gap-1
            text-orange-500 text-xs font-medium
            hover:underline
          "
                >
                  <Play size={12} />
                  Watch
                </button>

                <span className="text-xs text-gray-400">{recipe.time}</span>
              </div>
            </div>
          ))}
        </section>

        {filteredRecipes.length === 0 && (
          <p className="mt-10 text-center text-gray-400 text-sm">
            No recipes found
          </p>
        )}
      </main>
      <Footer />
    </div>
  );
}
