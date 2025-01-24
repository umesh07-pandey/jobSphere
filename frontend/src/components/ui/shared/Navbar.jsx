import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";

const Navbar = () => {
  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mx-auto max-w-5xl">
        <div>
          <h1 className="text-2xl font-bold">
            Job<span className="text-red-600">Sphere</span>
          </h1>
        </div>
        <div className="flex items-center gap-12">
          <ul className="flex font-medium items-center gap-5">
            <li>Home</li>
            <li>Jobs</li>
            <li>Browse</li>
          </ul>
          <Popover>
            <PopoverTrigger asChild>
              <Avatar>
                <AvatarImage
                  className="h-10 rounded-full cursor-pointer"
                  src="https://github.com/shadcn.png"
                />
              </Avatar>
            </PopoverTrigger>
            <PopoverContent className="w-88">
              <div>
                <h1>logout</h1>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
