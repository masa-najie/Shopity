import React from "react";
import { useState } from "react";
import { MdExpandMore } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const CategoriesNavBar: React.FC = () => {
  const navigate = useNavigate();
  interface Sublink {
    id: string;
    label: string;
    link: string;
  }
  interface Categories {
    id: string;
    label: string;
    link: string;
    sublinks: Sublink[] | null;
  }
  const [Categories, setCategories] = useState<Categories[]>([
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
    {
      id: "11",
      label: "kitchen",
      link: "/kitchen",
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
  ]);
  const [hiddenCat, setHiddenCat] = useState<Categories[]>([]);
  const [showMore, setShowMore] = useState<boolean>(false);
  return (
    <>
      <div className="bg-Sapphire w-full h-8 text-white flex items-center justify-around sm:text-base text-sm">
        {/* showing less categories for small screen */}
        <div className="flex sm:hidden  items-center justify-evenly h-full w-full">
          {Categories.slice(0, 4).map((Category: Categories) => {
            return (
              <div
                key={Category.id}
                className="group hover:bg-gray-100  h-full hover:text-Sapphire "
              >
                <button
                  onClick={() => {
                    if (!Category.sublinks) navigate(Category.link);
                  }}
                  className="w-full h-full text-center px-2"
                >
                  {Category.label}
                </button>
                {Category.sublinks && (
                  <div className="absolute group-hover:flex hidden hover:flex text-center cursor-pointer text-sm text-gray-600 bg-gray-100 w-auto p-3 shadow-md">
                    <div className="flex flex-wrap">
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
          {Categories.length > 4 && (
            <button
              onClick={() => {
                setShowMore(!showMore);
                setHiddenCat(Categories.slice(4, Categories.length));
              }}
            >
              {showMore ? (
                <div className="flex items-center">
                  less
                  <MdExpandMore className="mt-1 ml-1 rotate-180" />
                </div>
              ) : (
                <div className="flex items-center">
                  more
                  <MdExpandMore className="mt-1 ml-1" />
                </div>
              )}
            </button>
          )}
        </div>
        {/* show more categories for larger screens */}
        <div className="hidden sm:flex  items-center justify-evenly h-full w-full">
          {Categories.slice(0, 8).map((Category: Categories) => {
            return (
              <div
                key={Category.id}
                className="group   h-full  transition-all hover:text-Sapphire hover:bg-gray-100 duration-500"
              >
                <button
                  onClick={() => {
                    if (!Category.sublinks) navigate(Category.link);
                  }}
                  className="w-full h-full text-center px-2"
                >
                  {Category.label}
                </button>
                {Category.sublinks && (
                  <div className="absolute text-center cursor-pointer invisible  text-gray-600 bg-gray-100 w-auto p-3 shadow-md  transition-all  group-hover:visible duration-200">
                    <div className="flex flex-wrap">
                      {Category.sublinks.map((slink) => (
                        <div
                          key={slink.id}
                          onClick={() => navigate(slink.link)}
                          className="p-5"
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
          {Categories.length > 8 && (
            <button
              onClick={() => {
                setShowMore(!showMore);
                setHiddenCat(Categories.slice(8, Categories.length));
              }}
            >
              {showMore ? (
                <div className="flex items-center">
                  less
                  <MdExpandMore className="mt-1 ml-1 rotate-180" />
                </div>
              ) : (
                <div className="flex items-center">
                  more
                  <MdExpandMore className="mt-1 ml-1" />
                </div>
              )}
            </button>
          )}
        </div>
      </div>

      {/* showing the rest of the categories for all screen sizes */}
      {showMore && (
        <div className="bg-Sapphire w-full min-h-8 text-white sm:text-base text-sm shadow-md flex items-center justify-around pt-2">
          <div className=" flex flex-wrap">
            {hiddenCat.map((Category: Categories) => {
              return (
                <div
                  key={Category.id}
                  className="group   h-full   sm:mx-10  sm:mt-3 m-2 transition-all hover:text-Sapphire hover:bg-gray-100 duration-500"
                >
                  <button
                    onClick={() => {
                      if (!Category.sublinks) navigate(Category.link);
                    }}
                    className="w-full h-full text-center px-2"
                  >
                    {Category.label}
                  </button>
                  {Category.sublinks && (
                    <div className="absolute invisible text-center cursor-pointer text-gray-600 bg-gray-100 w-auto sm:p-3 shadow-md transition-all  group-hover:visible duration-200">
                      <div className="flex flex-wrap">
                        {Category.sublinks.map((slink) => (
                          <div
                            key={slink.id}
                            onClick={() => navigate(slink.link)}
                            className="sm:p-5 p-2"
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
        </div>
      )}
    </>
  );
};
export default CategoriesNavBar;
