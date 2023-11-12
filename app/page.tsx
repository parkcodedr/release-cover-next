"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import FroalaEditor from "react-froala-wysiwyg";
// Require Editor CSS files.
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import { FileUploader } from "react-drag-drop-files";

const Home: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const fileTypes = ["JPG", "PNG", "GIF"];
  const [biography, setBiography] = useState<string>("");
  const [know, setKnow] = useState<string>("");

  const handleKnowChange = (model: string) => {
    setKnow(model);
  };

  const handleBiographyChange = (model: string) => {
    setBiography(model);
  };

  const formSchema = z.object({
    artist: z.string().min(2, {
      message: "Arist name required",
    }),
    release_name: z.string().min(2, {
      message: "Release name required",
    }),
    spotify_listener: z.string().min(1, { message: "Field is required" }),
    instagram_follower: z.string().min(1, { message: "Field is required" }),
    twitter_follower: z.string().min(1, { message: "Field is required" }),
    music_heroes: z.string().min(1, { message: "Field is required" }),
    current_listening: z.string().min(1, { message: "Field is required" }),
    album_talk: z.string().min(1, { message: "Field is required" }),
    monthly_listener: z.string().min(1, { message: "Field is required" }),
    social_followers: z.string().min(1, { message: "Field is required" }),
    chat_performance: z.string().min(1, { message: "Field is required" }),
    bg_color: z.string().min(1, { message: "Field is required" }),
    text_color: z.string().min(1, { message: "Field is required" }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      artist: "",
      release_name: "",
      spotify_listener: "",
      instagram_follower: "",
      twitter_follower: "",
      music_heroes: "",
      current_listening: "",
      album_talk: "",
      monthly_listener: "",
      social_followers: "",
      chat_performance: "",
      bg_color: "",
      text_color: "",
    },
  });

  const handleDrop = (files: File) => {
    setFile(files);
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  console.log({ biography });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24 md:p-24 w-full  mx-auto container">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <main className=" w-full">
            <h2 className="font-semibold text-2xl mb-3">
              Generate Press Release
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 mb-2 gap-6">
              <div>
                <FormField
                  control={form.control}
                  name="artist"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Artist name</FormLabel>
                      <FormControl>
                        <Input placeholder="Artist name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div>
                <FormField
                  control={form.control}
                  name="release_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Release Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Release Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 mb-2 gap-6">
              <FormField
                control={form.control}
                name="spotify_listener"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Spotify Listeners</FormLabel>
                    <FormControl>
                      <Input placeholder="Spotify Listeners" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="instagram_follower"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Instagram followers</FormLabel>
                    <FormControl>
                      <Input placeholder="Instagram followers" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="twitter_follower"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Twitter followers</FormLabel>
                    <FormControl>
                      <Input placeholder="Twitter followers" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormItem>
              <div className="my-3">
                {" "}
                <FormLabel>Biography</FormLabel>
              </div>
              <FormControl>
                {/* <Textarea placeholder="Text in your biography" {...field} /> */}
                <FroalaEditor
                  config={{
                    placeholderText: "Write your biography",
                    charCounterCount: false,
                    heightMin: 100,
                  }}
                  tag="textarea"
                  model={biography}
                  onModelChange={handleBiographyChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>

            <FormItem>
              <div className="my-3">
                <FormLabel>Did you know?</FormLabel>
              </div>
              <FormControl>
                {/* <Textarea placeholder="Text in your biography" {...field} /> */}
                <FroalaEditor
                  config={{
                    placeholderText: "Enter text and sepereate with coma (,)",
                    charCounterCount: false,
                    heightMin: 100,
                  }}
                  tag="textarea"
                  model={know}
                  onModelChange={handleKnowChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>

            <section className="grid grid-cols-1 md:grid-cols-2 mb-2 gap-6">
              <FormField
                control={form.control}
                name="music_heroes"
                render={({ field }) => (
                  <FormItem>
                    <div className="my-3">
                      {" "}
                      <FormLabel>Music Heroes</FormLabel>
                    </div>
                    <FormControl>
                      <Textarea
                        placeholder="seperate with coma (,)"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="current_listening"
                render={({ field }) => (
                  <FormItem>
                    <div className="my-3">
                      {" "}
                      <FormLabel>Currently listening to:</FormLabel>
                    </div>
                    <FormControl>
                      <Textarea
                        placeholder="seperate with coma (,)"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </section>
            <FormField
              control={form.control}
              name="album_talk"
              render={({ field }) => (
                <FormItem>
                  <div className="my-3">
                    {" "}
                    <FormLabel>Album Talk</FormLabel>
                  </div>
                  <FormControl>
                    <Textarea placeholder="Enter Album Talk" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <section className="my-3">
              <p className="text-sm text-muted-foreground py-2 border-b mb-2">
                Benchmarks
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 mb-2 gap-6">
                <FormField
                  control={form.control}
                  name="monthly_listener"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mothnly Listener</FormLabel>
                      <FormControl>
                        <Input placeholder="Mothnly Listener" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="social_followers"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Social Media Followers</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Social Media Followers"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="chat_performance"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Chat Performance</FormLabel>
                      <FormControl>
                        <Input placeholder="Chat Performance" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 mb-2 gap-6 my-3">
                <FormField
                  control={form.control}
                  name="bg_color"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Select Background color</FormLabel>
                      <FormControl>
                        <div className="">
                          <input
                            type="color"
                            defaultValue="#ffffff"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="text_color"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Select Text color</FormLabel>
                      <FormControl>
                        <div className="">
                          <input
                            type="color"
                            defaultValue="#ffffff"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormItem>
                  <FormLabel>Background Image</FormLabel>
                  <FormControl>
                    <div className="">
                      <FileUploader
                        name="file"
                        types={fileTypes}
                        handleChange={handleDrop}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </div>
            </section>
          </main>

          <div className="flex justify-end">
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </Form>
    </main>
  );
};
export default Home;
