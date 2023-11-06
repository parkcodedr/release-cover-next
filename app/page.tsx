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

  const formSchema = z.object({
    username: z.string().min(2).max(50),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  const handleDrop = (files: File) => {
    setFile(files);
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 w-3/5 border mx-auto container">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <main className=" w-full">
                <h2 className="font-semibold text-2xl mb-3">
                  Generate Press Release
                </h2>
                <div className="columns-2 mb-2">
                  <FormItem>
                    <FormLabel>Artist name</FormLabel>
                    <FormControl>
                      <Input placeholder="Artist name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                  <FormItem>
                    <FormLabel>Release Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Release Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                </div>
                <div className="columns-3 mb-2">
                  <FormItem>
                    <FormLabel>Spotify Listeners</FormLabel>
                    <FormControl>
                      <Input placeholder="Spotify Listeners" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                  <FormItem>
                    <FormLabel>Instagram followers</FormLabel>
                    <FormControl>
                      <Input placeholder="Instagram followers" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>

                  <FormItem>
                    <FormLabel>Twitter followers</FormLabel>
                    <FormControl>
                      <Input placeholder="Twitter followers" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
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
                      }}
                      tag="textarea"
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
                        placeholderText:
                          "Enter text and sepereate with coma (,)",
                        charCounterCount: false,
                      }}
                      tag="textarea"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
                <section className="columns-1 mb-2">
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
                </section>
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
                <section className="my-3">
                  <p className="text-sm text-muted-foreground py-2 border-b mb-2">
                    Benchmarks
                  </p>
                  <div className="columns-3">
                    <FormItem>
                      <FormLabel>Mothnly Listener</FormLabel>
                      <FormControl>
                        <Input placeholder="Mothnly Listener" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
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
                    <FormItem>
                      <FormLabel>Chat Performance</FormLabel>
                      <FormControl>
                        <Input placeholder="Chat Performance" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  </div>
                  <div className="columns-3 my-3">
                    <FormItem>
                      <FormLabel>Select Background color</FormLabel>
                      <FormControl>
                        <div className="">
                          <input type="color" />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                    <FormItem>
                      <FormLabel>Select Text color</FormLabel>
                      <FormControl>
                        <div className="">
                          <input type="color" />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                    <FormItem>
                      <FormLabel>Background Image</FormLabel>
                      <FormControl>
                        <div className="">
                          <FileUploader onDrop={handleDrop} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  </div>
                </section>
              </main>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </main>
  );
};
export default Home;
