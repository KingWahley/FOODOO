"use client";
import { Play } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { Clock, Star, ArrowLeft, Heart } from "lucide-react";
import { recipes } from "../../../components/recipes/data";

export default function RecipeDetailPage() {
  const { id } = useParams();
  const router = useRouter();

  const recipe = recipes.find((r) => r.id === id);

  if (!recipe) {
    return <p className="p-10 text-center">Recipe not found</p>;
  }

  return (
    <main className="min-h-screen bg-gray-50 pb-32">
      <div className="relative mx-4 mt-4 h-64 rounded-3xl overflow-hidden">
        <Image
          src={recipe.image}
          alt={recipe.title}
          fill
          className="object-cover"
          priority
        />

        <button
          onClick={() => router.back()}
          className="
  fixed top-8 left-6
  bg-white/90 backdrop-blur
  p-2 rounded-full shadow
  z-50
"
        >
          <ArrowLeft size={18} />
        </button>

        {/* <button className="absolute top-4 right-4 bg-white/90 backdrop-blur p-2 rounded-full text-red-500 shadow">
          <Heart size={18} />
        </button> */}
      </div>

      <div className="relative -mt-10 mx-4 bg-white rounded-3xl px-6 pt-8 pb-10 shadow-sm">
        <h1 className="text-2xl font-semibold">{recipe.title}</h1>

        <p className="mt-1 text-sm text-gray-500">{recipe.calories}</p>

        <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
          <div className="bg-gray-50 rounded-xl p-4 text-center">
            <p className="font-semibold text-lg">{recipe.recook}</p>
            <p className="text-gray-400 text-xs mt-1">people recooked this</p>
          </div>

          <div className="bg-gray-50 rounded-xl p-4 text-center">
            <p className="font-semibold text-lg flex justify-center gap-1 items-center">
              <Star size={14} className="text-yellow-400" />
              {recipe.rating}
            </p>
            <p className="text-gray-400 text-xs mt-1">rating</p>
          </div>
        </div>

        <h3 className="mt-8 font-semibold text-base">About this recipe</h3>
        <p className="mt-2 text-sm text-gray-600 leading-relaxed">
          {recipe.description}
        </p>

        <h3 className="mt-8 font-semibold text-base">Ingredients</h3>

        <div className="mt-4 grid grid-cols-3 gap-3 text-xs">
          {recipe.ingredients.map((ing) => (
            <div
              key={ing}
              className="bg-orange-50 text-orange-700 rounded-xl py-2 px-3 text-center font-medium"
            >
              {ing}
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => window.open(recipe.video, "_blank")}
        className="mt-4 flex items-center gap-2 bg-orange-500 text-white hover:bg-white hover:text-orange-500
 text-sm px-6 py-4 rounded-full font-medium  fixed bottom-6 left-1/2 -translate-x-1/2
          font-medium shadow-lg"
      >
        <Play size={12} />
        Watch
      </button>
    </main>
  );
}
