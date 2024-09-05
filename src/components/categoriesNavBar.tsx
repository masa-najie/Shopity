import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MdExpandMore } from "react-icons/md";
const CategoriesNavBar :React.FC= () => {
  interface Sublink{
    id:string,
    label:string,
    link:string
  }
  interface Categories{
    id:string,
    label:string,
    link:string,
    sublinks:Sublink[]|null
  }
  const [Categories,setCategories] = useState<Categories[]>([
    {
      id: "1",
      label: "women",
      link: "/women",
      sublinks: [
        {
          id: "1",
          label: "cloths",
          link: "/women/clothes",
        },
        {
          id: "2",
          label: "shoes",
          link: "/women/shoes",
        },
        {
          id: "3",
          label: "bags",
          link: "/women/bags",
        },
        {
          id: "4",
          label: "cloths",
          link: "/women/clothes",
        },
        {
          id: "5",
          label: "shoes",
          link: "/women/shoes",
        },
        {
          id: "6",
          label: "bags",
          link: "/women/bags",
        },
        {
          id: "7",
          label: "cloths",
          link: "/women/clothes",
        },
        {
          id: "8",
          label: "shoes",
          link: "/women/shoes",
        },
        {
          id: "9",
          label: "bags",
          link: "/women/bags",
        },
      ],
    },
    {
      id: "2",
      label: "men",
      link: "/men",
      sublinks: [
        {
          id: "1",
          label: "watches",
          link: "/women/watches",
        },
      ],
    },
    {
      id: "3",
      label: "children",
      link: "/children",
      sublinks: null,
    },
    {
      id: "4",
      label: "pets",
      link: "/pets",
      sublinks: null,
    },
    {
      id: "5",
      label: "electronics",
      link: "/electronics",
      sublinks: null,
    },
    {
      id: "6",
      label: "plus size",
      link: "/plus-size",
      sublinks: [
        {
          id: "1",
          label: "men",
          link: "/plus-size/men",
        },
        {
          id: "2",
          label: "women",
          link: "/plus-size/women",
        },
      ],
    },
    {
      id: "7",
      label: "decorations",
      link: "/decore",
      sublinks: null,
    },
    {
      id: "8",
      label: "furniture",
      link: "/furniture",
      sublinks: null,
    },
    {
      id: "9",
      label: "games",
      link: "/games",
      sublinks: null,
    },
    {
      id: "10",
      label: "books",
      link: "/books",
      sublinks: null,
    },
  ]);
  const [visibleItems, setVisibleItems] = useState<Categories[]>([]);
  const [hiddenItems, setHiddenItems] = useState<Categories[]>([]);
  const [showRest, setShowRest] = useState<boolean>(false);
  const navigate = useNavigate();
  const updateVisibleItems:()=>void = () => {
    if (window.innerWidth < 640) {
      // Small devices
      setVisibleItems(Categories.slice(0, 4));
      setHiddenItems(Categories.slice(4));
    } else {
      // Large devices
      setVisibleItems(Categories.slice(0, 9));
      setHiddenItems(Categories.slice(9));
    }
  };

  useEffect(() => {
    updateVisibleItems();
    window.addEventListener("resize", updateVisibleItems);

    return () => window.removeEventListener("resize", updateVisibleItems);
  }, [Categories]);
  return (
    <>
      <div className="bg-Sapphire w-full overflow-hidden h-8 flex items-center text-white md:px-14 justify-around text-xs sm:text-base ">
        {visibleItems.map((Category) => {
          return (
            <div
              key={Category.id}
              className="group hover:bg-white h-full hover:text-Sapphire "
            >
              <button
                onClick={() => {
                  navigate(Category.link);
                }}
                className="w-full h-full text-center px-2"
              >
                {Category.label}
              </button>
              {Category.sublinks && (
                <div className="absolute group-hover:block hidden hover:block text-center cursor-pointer text-sm text-gray-600 bg-gray-100 w-auto p-3 shadow-md">
                  <div
                    className={`grid gap-8 ${
                      Category.sublinks.length === 1
                        ? "grid-cols-1"
                        : Category.sublinks.length === 2
                        ? "grid-cols-2"
                        : Category.sublinks.length === 3
                        ? "grid-cols-3"
                        : Category.sublinks.length === 4
                        ? "grid-cols-4"
                        : "grid-cols-5"
                    }`}
                  >
                    {Category.sublinks.map((slink) => (
                      <div
                        key={slink.id}
                        onClick={() => navigate(slink.link)}
                        className="p-2"
                      >
                        {slink.label}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
        {hiddenItems.length > 0 && (
          <button
            onClick={() => {
              setShowRest(!showRest);
            }}
          >
            <div className="flex items-center">
              more
              <MdExpandMore className="mt-1 ml-1" />
            </div>
          </button>
        )}
      </div>
      {showRest && (
        <div className="bg-Sapphire w-full overflow-hidden min-h-8 flex flex-wrap items-center text-white md:px-14 justify-around text-xs sm:text-base ">
          {hiddenItems.map((Category) => {
            return (
              <div
                key={Category.id}
                className="group hover:bg-white h-full hover:text-Sapphire "
              >
                <button
                  onClick={() => {
                    navigate(Category.link);
                  }}
                  className="w-full h-full text-center px-2"
                >
                  {Category.label}
                </button>
                {Category.sublinks && (
                  <div className="absolute group-hover:block hidden hover:block text-center cursor-pointer text-sm text-gray-600 bg-gray-100 w-auto p-3 shadow-md">
                    <div
                      className={`grid gap-8 ${
                        Category.sublinks.length === 1
                          ? "grid-cols-1"
                          : Category.sublinks.length === 2
                          ? "grid-cols-2"
                          : Category.sublinks.length === 3
                          ? "grid-cols-3"
                          : Category.sublinks.length === 4
                          ? "grid-cols-4"
                          : "grid-cols-5"
                      }`}
                    >
                      {Category.sublinks.map((slink) => (
                        <div
                          key={slink.id}
                          onClick={() => navigate(slink.link)}
                          className="p-2"
                        >
                          {slink.label}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};
export default CategoriesNavBar;
