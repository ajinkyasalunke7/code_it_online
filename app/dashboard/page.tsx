"use client";
import CardComponent from "@/components/CardComponent";
import { useState } from "react";

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const cardsData = [
    {
      id: "1",
      filename: "file1.txt",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempus molestie posuere. Duis nisl mauris, pellentesque a ornare ac, elementum id sapien. Suspendisse potenti. Sed ac est sit amet turpis sodales vestibulum. Nullam et arcu mattis, mattis sapien vehicula, aliquet lacus. Donec eu euismod ipsum. Praesent at venenatis dolor, id gravida arcu. Aenean lacus augue, fringilla ac auctor vitae, tincidunt ut nisl. Morbi laoreet consectetur pretium. Maecenas vestibulum molestie elit, vel sodales erat tristique eget. Donec sodales gravida fermentum. Donec id porttitor lorem. Nulla nec nulla odio. Ut venenatis lorem id pharetra ultricies. Mauris varius consequat urna, molestie tincidunt neque consequat eget. Etiam interdum sagittis cursus. Ut felis lorem, ultrices aliquet ultricies egestas, eleifend id nulla. Donec non nisl in mauris interdum viverra at id urna. Sed arcu neque, pulvinar eget velit ac, facilisis ullamcorper arcu. Fusce semper nunc nisl, in vulputate leo euismod a. Nulla vel turpis varius arcu tempor hendrerit. Nam ac convallis orci, eu ornare enim. Vivamus non tellus vitae ipsum laoreet vehicula. Quisque tristique, nulla nec molestie tempor, nibh turpis finibus nisl, at dictum urna magna vel neque. Integer et eleifend orci. Nulla odio lorem, sodales id pretium sed, viverra nec ligula. Mauris ut sollicitudin leo, a efficitur diam. Phasellus in elit blandit, elementum elit vel, ultrices libero. Vivamus posuere massa ligula, a feugiat libero mattis placerat. In ac dolor ultricies, tristique leo nec, eleifend sem.",
      lastEditDate: "2024-09-20",
      lastEditBy: "User A",
    },
    {
      id: "2",
      filename: "file2.txt",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempus molestie posuere. Duis nisl mauris, pellentesque a ornare ac, elementum id sapien. Suspendisse potenti. Sed ac est sit amet turpis sodales vestibulum. Nullam et arcu mattis, mattis sapien vehicula, aliquet lacus. Donec eu euismod ipsum. Praesent at venenatis dolor, id gravida arcu. Aenean lacus augue, fringilla ac auctor vitae, tincidunt ut nisl. Morbi laoreet consectetur pretium. Maecenas vestibulum molestie elit, vel sodales erat tristique eget. Donec sodales gravida fermentum. Donec id porttitor lorem. Nulla nec nulla odio. Ut venenatis lorem id pharetra ultricies. Mauris varius consequat urna, molestie tincidunt neque consequat eget. Etiam interdum sagittis cursus. Ut felis lorem, ultrices aliquet ultricies egestas, eleifend id nulla. Donec non nisl in mauris interdum viverra at id urna. Sed arcu neque, pulvinar eget velit ac, facilisis ullamcorper arcu. Fusce semper nunc nisl, in vulputate leo euismod a. Nulla vel turpis varius arcu tempor hendrerit. Nam ac convallis orci, eu ornare enim. Vivamus non tellus vitae ipsum laoreet vehicula. Quisque tristique, nulla nec molestie tempor, nibh turpis finibus nisl, at dictum urna magna vel neque. Integer et eleifend orci. Nulla odio lorem, sodales id pretium sed, viverra nec ligula. Mauris ut sollicitudin leo, a efficitur diam. Phasellus in elit blandit, elementum elit vel, ultrices libero. Vivamus posuere massa ligula, a feugiat libero mattis placerat. In ac dolor ultricies, tristique leo nec, eleifend sem.",
      lastEditDate: "2024-09-21",
      lastEditBy: "User B",
    },
    {
      id: "3",
      filename: "file3.txt",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempus molestie posuere. Duis nisl mauris, pellentesque a ornare ac, elementum id sapien. Suspendisse potenti. Sed ac est sit amet turpis sodales vestibulum. Nullam et arcu mattis, mattis sapien vehicula, aliquet lacus. Donec eu euismod ipsum. Praesent at venenatis dolor, id gravida arcu. Aenean lacus augue, fringilla ac auctor vitae, tincidunt ut nisl. Morbi laoreet consectetur pretium. Maecenas vestibulum molestie elit, vel sodales erat tristique eget. Donec sodales gravida fermentum. Donec id porttitor lorem. Nulla nec nulla odio. Ut venenatis lorem id pharetra ultricies. Mauris varius consequat urna, molestie tincidunt neque consequat eget. Etiam interdum sagittis cursus. Ut felis lorem, ultrices aliquet ultricies egestas, eleifend id nulla. Donec non nisl in mauris interdum viverra at id urna. Sed arcu neque, pulvinar eget velit ac, facilisis ullamcorper arcu. Fusce semper nunc nisl, in vulputate leo euismod a. Nulla vel turpis varius arcu tempor hendrerit. Nam ac convallis orci, eu ornare enim. Vivamus non tellus vitae ipsum laoreet vehicula. Quisque tristique, nulla nec molestie tempor, nibh turpis finibus nisl, at dictum urna magna vel neque. Integer et eleifend orci. Nulla odio lorem, sodales id pretium sed, viverra nec ligula. Mauris ut sollicitudin leo, a efficitur diam. Phasellus in elit blandit, elementum elit vel, ultrices libero. Vivamus posuere massa ligula, a feugiat libero mattis placerat. In ac dolor ultricies, tristique leo nec, eleifend sem.",
      lastEditDate: "2024-09-22",
      lastEditBy: "User C",
    },
    {
      id: "4",
      filename: "file4.txt",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempus molestie posuere. Duis nisl mauris, pellentesque a ornare ac, elementum id sapien. Suspendisse potenti. Sed ac est sit amet turpis sodales vestibulum. Nullam et arcu mattis, mattis sapien vehicula, aliquet lacus. Donec eu euismod ipsum. Praesent at venenatis dolor, id gravida arcu. Aenean lacus augue, fringilla ac auctor vitae, tincidunt ut nisl. Morbi laoreet consectetur pretium. Maecenas vestibulum molestie elit, vel sodales erat tristique eget. Donec sodales gravida fermentum. Donec id porttitor lorem. Nulla nec nulla odio. Ut venenatis lorem id pharetra ultricies. Mauris varius consequat urna, molestie tincidunt neque consequat eget. Etiam interdum sagittis cursus. Ut felis lorem, ultrices aliquet ultricies egestas, eleifend id nulla. Donec non nisl in mauris interdum viverra at id urna. Sed arcu neque, pulvinar eget velit ac, facilisis ullamcorper arcu. Fusce semper nunc nisl, in vulputate leo euismod a. Nulla vel turpis varius arcu tempor hendrerit. Nam ac convallis orci, eu ornare enim. Vivamus non tellus vitae ipsum laoreet vehicula. Quisque tristique, nulla nec molestie tempor, nibh turpis finibus nisl, at dictum urna magna vel neque. Integer et eleifend orci. Nulla odio lorem, sodales id pretium sed, viverra nec ligula. Mauris ut sollicitudin leo, a efficitur diam. Phasellus in elit blandit, elementum elit vel, ultrices libero. Vivamus posuere massa ligula, a feugiat libero mattis placerat. In ac dolor ultricies, tristique leo nec, eleifend sem.",
      lastEditDate: "2024-09-23",
      lastEditBy: "User D",
    },
    {
      id: "5",
      filename: "file5.txt",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempus molestie posuere. Duis nisl mauris, pellentesque a ornare ac, elementum id sapien. Suspendisse potenti. Sed ac est sit amet turpis sodales vestibulum. Nullam et arcu mattis, mattis sapien vehicula, aliquet lacus. Donec eu euismod ipsum. Praesent at venenatis dolor, id gravida arcu. Aenean lacus augue, fringilla ac auctor vitae, tincidunt ut nisl. Morbi laoreet consectetur pretium. Maecenas vestibulum molestie elit, vel sodales erat tristique eget. Donec sodales gravida fermentum. Donec id porttitor lorem. Nulla nec nulla odio. Ut venenatis lorem id pharetra ultricies. Mauris varius consequat urna, molestie tincidunt neque consequat eget. Etiam interdum sagittis cursus. Ut felis lorem, ultrices aliquet ultricies egestas, eleifend id nulla. Donec non nisl in mauris interdum viverra at id urna. Sed arcu neque, pulvinar eget velit ac, facilisis ullamcorper arcu. Fusce semper nunc nisl, in vulputate leo euismod a. Nulla vel turpis varius arcu tempor hendrerit. Nam ac convallis orci, eu ornare enim. Vivamus non tellus vitae ipsum laoreet vehicula. Quisque tristique, nulla nec molestie tempor, nibh turpis finibus nisl, at dictum urna magna vel neque. Integer et eleifend orci. Nulla odio lorem, sodales id pretium sed, viverra nec ligula. Mauris ut sollicitudin leo, a efficitur diam. Phasellus in elit blandit, elementum elit vel, ultrices libero. Vivamus posuere massa ligula, a feugiat libero mattis placerat. In ac dolor ultricies, tristique leo nec, eleifend sem.",
      lastEditDate: "2024-09-24",
      lastEditBy: "User E",
    },
    {
      id: "6",
      filename: "file6.txt",
      content: "Content for file 6",
      lastEditDate: "2024-09-25",
      lastEditBy: "User F",
    },
  ];

  return (
    <div className="grid p-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {cardsData.map((card, key) => (
        <CardComponent
          key={key}
          id={card.id}
          filename={card.filename}
          content={card.content}
          lastEditDate={card.lastEditDate}
          lastEditBy={card.lastEditBy}
        />
      ))}
    </div>
  );
}
