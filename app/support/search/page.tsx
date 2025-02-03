"use client";
import React, { useState, ChangeEvent } from "react";
import { data } from "@/lib/data";
import InfoCard from "@/components/InfoCard";

export default function Search() {
  const [keyword, setKeyword] = useState<string>("");
  const [matchingIds, setMatchingIds] = useState<number[]>([]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setKeyword(event.target.value);
  };

  const handleSearchClick = (): void => {
    if (keyword.trim() === "") {
      setMatchingIds([]);
      return;
    }

    const lowerKeyword = keyword.toLowerCase();

    const filteredIds = data
      .filter((product) => {
        // Check top-level string properties
        if (
          product.sku.toLowerCase().includes(lowerKeyword) ||
          (product.collection &&
            product.collection.toLowerCase().includes(lowerKeyword)) ||
          product.category.toLowerCase().includes(lowerKeyword) ||
          product.name.toLowerCase().includes(lowerKeyword) ||
          product.aliases.toLowerCase().includes(lowerKeyword) ||
          product.subtitle.toLowerCase().includes(lowerKeyword) ||
          product.details.toLowerCase().includes(lowerKeyword)
        ) {
          return true;
        }

        // Check features object
        const { features } = product;
        if (
          (features.dimensions &&
            features.dimensions.toLowerCase().includes(lowerKeyword)) ||
          (features.weight &&
            features.weight.toLowerCase().includes(lowerKeyword)) ||
          features.material.toLowerCase().includes(lowerKeyword) ||
          features.color.toLowerCase().includes(lowerKeyword) ||
          (features.water &&
            features.water.toLowerCase().includes(lowerKeyword)) ||
          (features.overFlow &&
            features.overFlow.toLowerCase().includes(lowerKeyword)) ||
          (features.drainageMode &&
            features.drainageMode.toLowerCase().includes(lowerKeyword))
        ) {
          return true;
        }

        // Check configuration object
        const { configuration } = product;
        if (configuration) {
          if (
            (configuration.outlook &&
              configuration.outlook.some((item) =>
                item.toLowerCase().includes(lowerKeyword)
              )) ||
            (configuration.watertank &&
              configuration.watertank.some((item) =>
                item.toLowerCase().includes(lowerKeyword)
              )) ||
            (configuration.cleaning &&
              configuration.cleaning.some((item) =>
                item.toLowerCase().includes(lowerKeyword)
              )) ||
            (configuration.seatlid &&
              configuration.seatlid.some((item) =>
                item.toLowerCase().includes(lowerKeyword)
              ))
          ) {
            return true;
          }
        }

        // Check image alt text and links
        if (
          product.imgAlt.toLowerCase().includes(lowerKeyword) ||
          product.coverSrc.toLowerCase().includes(lowerKeyword) ||
          product.sketchImg.some((img) =>
            img.toLowerCase().includes(lowerKeyword)
          ) ||
          product.specification.toLowerCase().includes(lowerKeyword) ||
          product.manual.toLowerCase().includes(lowerKeyword) ||
          product.install.toLowerCase().includes(lowerKeyword) ||
          product.linkTo.toLowerCase().includes(lowerKeyword)
        ) {
          return true;
        }

        return false;
      })
      .map((product) => product.id);

    setMatchingIds(filteredIds);
  };
  const fetchResult = data.filter((item) => matchingIds.includes(item.id));

  return (
    <div className="pt-16  min-h-screen">
      <div className="pt-40 sm:px-20 px-2">
        <label
          htmlFor="search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search"
            required
            value={keyword}
            onChange={handleInputChange}
          />
          <button
            onClick={handleSearchClick}
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </div>

      {matchingIds.length > 0
        ? fetchResult.map((d, index) => (
            <InfoCard
              key={d.id}
              name={d.name}
              imgUrl={d.coverSrc}
              linkTo={d.linkTo}
              sku={d.sku}
            />
          ))
        : keyword && <p></p>}
    </div>
  );
}
