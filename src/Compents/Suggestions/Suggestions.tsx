import { useState } from "react";
import {
  AiFillHeart,
  AiOutlineDoubleLeft,
  AiOutlineDoubleRight,
} from "react-icons/ai";
import { FaComment } from "react-icons/fa";

const ROUTES = [
  {
    id: "sdasff2",
    name: "Cumilla to Chattogram",
    publishedBy: "ahnaf",
    review: {
      like: 2,
      comment: 3,
    },
  },
  {
    id: "ssdasff3",
    name: "Chattogram to Cumilla",
    publishedBy: "shifat",
    review: {
      like: 5,
      comment: 10,
    },
  },
];

function Suggestions() {
  const [show, setShow] = useState(true);
  return (
    <div className="absolute z-50 top-1/2 -translate-y-1/2 right-0 -translate-x-4 bg-white grid gap-4 p-2 border border-gray-400 rounded-md shadow-lg">
      {show ? (
        <div className={`p-2 w-72`}>
          <h2 className="font-bold text-xl text-blue-950">
            Routes you may like
          </h2>
          <button
            className="absolute top-0 right-0 -translate-x-1/2 translate-y-1/2 text-gray-600 hover:text-gray-900"
            onClick={() => setShow(false)}
          >
            <AiOutlineDoubleRight size="18" />
          </button>
          <div className="mt-6 mb-2 space-y-3">
            {ROUTES.map((rt) => (
              <div
                key={rt.id}
                className="flex items-center justify-between bg-gray-100 p-2  rounded group hover:bg-orange-400 transition cursor-pointer"
              >
                <div>
                  <h3 className="font-medium group-hover:text-white">
                    {rt.name}
                  </h3>
                  <p className="text-xs text-gray-700 leading-4 group-hover:text-gray-100 font-light">
                    By: <span className="text-gray-900 font-normal group-hover:text-white text-sm">{rt.publishedBy}</span>
                  </p>
                </div>
                <div className="flex items-center text-sm gap-2 group-hover:text-white">
                  <div className="flex items-center ">
                    <AiFillHeart />
                    <span>{rt.review.like}</span>
                  </div>
                  <div className="flex item-center">
                    <FaComment className="relative top-[3px]" size="14" />
                    <span>{rt.review.comment}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <button
          className="p-1 text-gray-600 hover:text-gray-800"
          onClick={() => setShow(true)}
        >
          <AiOutlineDoubleLeft size={"20"} />
        </button>
      )}
    </div>
  );
}

export default Suggestions;
