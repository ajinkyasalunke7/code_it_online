"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useSearchParams } from "next/navigation";

export default function EditablePage() {
  const search = useSearchParams();
  const data = search?.get("text") || "Initial text"; // Fallback to 'Initial text' if no search param

  const [text, setText] = useState(data);
  const [lastEditTime, setLastEditTime] = useState<string | null>(null);
  const [lastEditBy, setLastEditBy] = useState<string | null>(null);
  const [isEdited, setIsEdited] = useState(false);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    setIsEdited(true);
  };

  const handleSave = () => {
    const currentTime = new Date().toLocaleString();
    setLastEditTime(currentTime);
    setLastEditBy("Current User"); // In a real app, this would be the actual user's name
    setIsEdited(false);

    // Here you would typically save the text to a backend or local storage
  };

  useEffect(() => {
    if (data !== "Initial text") {
      setIsEdited(true);
    }
  }, [data]);

  return (
    <div className="w-full text-black h-[90%] flex flex-col p-4 space-y-4 bg-background">
      <Textarea
        value={text}
        onChange={handleTextChange}
        className="flex-grow w-full min-h-[50vh] text-lg"
        placeholder="Enter your text here..."
      />
      <div className="flex justify-between items-center">
        <div className="text-sm text-muted-foreground">
          {lastEditTime && lastEditBy && (
            <p>
              Last edited on {lastEditTime} by {lastEditBy}
            </p>
          )}
        </div>
        {isEdited && (
          <Button onClick={handleSave} size="lg">
            Save
          </Button>
        )}
      </div>
    </div>
  );
}
