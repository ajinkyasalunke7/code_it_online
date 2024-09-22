"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import Link from "next/link";
import { SnackbarProvider, enqueueSnackbar } from "notistack";

interface FileViewCardProps {
  id: string;
  filename: string;
  content: string;
  lastEditDate: string;
  lastEditBy: string;
}

export default function CardComponent(
  { id, filename, content, lastEditDate, lastEditBy }: FileViewCardProps = {
    id: "1111",
    filename: "example.txt",
    content: "This is an example file content.\nIt can span multiple lines.",
    lastEditDate: "2023-06-15 14:30",
    lastEditBy: "John Doe",
  }
) {
  const handleOpen = () => {
    console.log(`Opening file: ${filename}`);
  };
  const handleCopy = (text: string) => {
    if (navigator.clipboard) {
      // Use Clipboard API if available
      navigator.clipboard
        .writeText(text)
        .then(() => {
          enqueueSnackbar("Text copied", { variant: "success" });
        })
        .catch((err) => {
          console.error("Failed to copy text:", err);
          alert("Failed to copy text.");
        });
    } else {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand("copy");
      } catch (err) {
        console.error("Fallback copy failed:", err);
        alert("Failed to copy text.");
      } finally {
        enqueueSnackbar("Text copied", { variant: "success" });

        document.body.removeChild(textArea);
      }
    }
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-xl font-medium -tracking-tighter">
          {filename}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[200px] w-full rounded-md border p-4">
          <pre className="text-sm whitespace-pre-wrap">{content}</pre>
        </ScrollArea>
      </CardContent>
      <CardFooter className="flex flex-row items-start gap-4">
        <Link
          href={{ pathname: `/dashboard/c/${id}`, query: { text: content } }}
        >
          <Button onClick={handleOpen} className="w-fit">
            Open / Edit
          </Button>
        </Link>

        <Button
          onClick={() => handleCopy(content)} // Use an arrow function here
          className="w-fit"
          variant={"outline"}
        >
          <Image width={20} height={0} src={"copy.svg"} alt="copy-icon" />
        </Button>
        <div className="text-sm text-muted-foreground">
          <p>Last edited on: {lastEditDate}</p>
          <p>Edited by: {lastEditBy}</p>
        </div>
      </CardFooter>
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        autoHideDuration={800}
      />
    </Card>
  );
}
