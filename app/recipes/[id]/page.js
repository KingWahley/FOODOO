"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { Clock, Star, ArrowLeft, Heart } from "lucide-react";
import { recipes } from "../../../components/recipes/data";

export default function RecipeDetailPage() {
  const { id } = useParams();
  const router = useRouter();

  const recipe = recipes.find(r => r.id === id);

  if (!recipe) {
    return <p className="p-10 text-center">Recipe not found</p>;
  }

  return (
    <main className="min-h-screen bg-white pb-24">
      <div className="relative h-80">
        <Image
          src={recipe.image}
          alt={recipe.title}
          fill
          className="object-cover"
        />

        <button
          onClick={() => router.back()}
          className="absolute top-4 left-4 bg-white p-2 rounded-full"
        >
          <ArrowLeft size={18} />
        </button>

        <button className="absolute top-4 right-4 bg-white p-2 rounded-full text-red-500">
          <Heart size={18} />
        </button>
      </div>

      <div className="-mt-12 bg-white rounded-t-3xl px-5 pt-6">
        <h1 className="text-2xl font-semibold">
          {recipe.title}
        </h1>
        <p className="text-sm text-gray-500">{recipe.calories}</p>

        <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
          <div className="text-center">
            <p className="font-semibold">{recipe.recook}</p>
            <p className="text-gray-400">recook this recipe</p>
          </div>
          <div className="text-center">
            <p className="font-semibold flex justify-center gap-1">
              <Star size={14} className="text-yellow-400" />
              {recipe.rating}
            </p>
            <p className="text-gray-400">rating</p>
          </div>
        </div>

        <h3 className="mt-6 font-semibold">Ingredients</h3>

        <div className="mt-4 grid grid-cols-3 gap-4 text-xs">
          {recipe.ingredients.map((ing) => (
            <div
              key={ing}
              className="bg-orange-50 rounded-xl p-3 text-center"
            >
              {ing}
            </div>
          ))}
        </div>
      </div>

      <button
        className="
          fixed bottom-6 left-1/2 -translate-x-1/2
          bg-orange-500 text-white
          px-8 py-4 rounded-full
          font-medium shadow-lg
          flex items-center gap-2
        "
      >
        <Clock size={16} />
        {recipe.time} to cook
      </button>
    </main>
  );
}
