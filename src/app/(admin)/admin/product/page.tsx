"use client";
import React, { FormEvent, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useSWRConfig } from "swr";
import { toast } from "sonner";

export default function Blogs() {
  const { mutate } = useSWRConfig();

  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [category, setCategory] = useState("");

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await fetch("/api/blogs", {
        method: "POST",
        body: JSON.stringify({
          name,
          title,
          content,
          coverImage,
          category,
        }),
      });
      mutate("/api/blogs");
      setName("");
      setCategory("");
      setContent("");
      setCoverImage("");
      setTitle("");

      toast.success("Success");
    } catch (error) {
      toast.error("Error");
    }
  };
  return (
    <div className="p-5 space-y-5">
      <div className="flex justify-between">
        <div className="flex-1" />
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="secondary" className="w-1/6">
              Add Product
            </Button>
          </DialogTrigger>
          <DialogContent className="lg:max-w-screen-lg overflow-y-scroll max-h-[600px]">
            <DialogHeader>
              <DialogTitle>Add Blog</DialogTitle>
              {/* <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription> */}
            </DialogHeader>

            <form onSubmit={handleFormSubmit}>
              <div className="grid grid-cols-2 gap-4 py-4">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="title" className="text-right">
                      Title
                    </Label>
                    <Input
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      name="title"
                      className="col-span-3"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="category" className="text-right">
                      Category
                    </Label>
                    <Select onValueChange={(value) => setCategory(value)}>
                      <SelectTrigger className="">
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="travel">Travel</SelectItem>
                          <SelectItem value="sport">Sport</SelectItem>
                          <SelectItem value="technology">Technology</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="coverImage" className="text-right">
                      Cover Image
                    </Label>
                    <Input
                      name="coverImage"
                      value={coverImage}
                      onChange={(e) => setCoverImage(e.target.value)}
                      type="url"
                      placeholder="https://preview.colorlib.com/theme/magdesign/images/img_2.jpg"
                      className="col-span-3"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="content" className="text-right">
                      Content
                    </Label>
                    <Textarea
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      placeholder="Type your content here."
                      name="content"
                      className=" h-72"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-right">
                      Author Name
                    </Label>
                    <Input
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="col-span-3"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="profile_image">Profile Image</Label>
                    <Input name="profile_image" type="file" />
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" className="w-1/3">
                  Add
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className=" text-sm">{/* table */}</div>
    </div>
  );
}
