// components/FormContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";

// Define types
interface FormState {
  artist: string;
  release_name: string;
  spotify_listener: string;
  instagram_follower: string;
  twitter_follower: string;
  music_heroes: string;
  current_listening: string;
  album_talk: string;
  monthly_listener: string;
  social_followers: string;
  chat_performance: string;
  bg_color: string;
  text_color: string;
  selectedFile: string;
  biography: string;
  know: string;
  music_quote: string;
}

interface FormContextProps {
  formState: FormState;
  setFormState: React.Dispatch<React.SetStateAction<FormState>>;
}

const initialFormState: FormState = {
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
  selectedFile: "",
  biography: "",
  know: "",
  music_quote: "",
};

const FormContext = createContext<FormContextProps | undefined>(undefined);

// FormProvider component
export const PreviewProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [formState, setFormState] = useState<FormState>(initialFormState);

  return (
    <FormContext.Provider value={{ formState, setFormState }}>
      {children}
    </FormContext.Provider>
  );
};

// Custom hook to use the form context
export const useFormPreview = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useForm must be used within a FormProvider");
  }
  return context;
};
