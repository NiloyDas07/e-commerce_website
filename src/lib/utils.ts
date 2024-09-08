import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const mockData = [
  {
    id: 1,
    name: "Pasta - Angel Hair",
    description:
      "Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo.",
    imageUrl: "http://dummyimage.com/100x100.png/ff4444/ffffff",
    stock: 38,
  },
  {
    id: 2,
    name: "Beans - Fava, Canned",
    description:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.",
    imageUrl: "http://dummyimage.com/183x100.png/dddddd/000000",
    stock: 93,
  },
  {
    id: 3,
    name: "Cranberries - Frozen",
    description:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    imageUrl: "http://dummyimage.com/193x100.png/cc0000/ffffff",
    stock: 58,
  },
  {
    id: 4,
    name: "Rambutan",
    description:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.",
    imageUrl: "http://dummyimage.com/134x100.png/ff4444/ffffff",
    stock: 79,
  },
  {
    id: 5,
    name: "Sobe - Green Tea",
    description:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.",
    imageUrl: "http://dummyimage.com/135x100.png/dddddd/000000",
    stock: 84,
  },
  {
    id: 6,
    name: "Cornstarch",
    description:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.",
    imageUrl: "http://dummyimage.com/188x100.png/ff4444/ffffff",
    stock: 44,
  },
  {
    id: 7,
    name: "Bread - English Muffin",
    description:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.",
    imageUrl: "http://dummyimage.com/244x100.png/cc0000/ffffff",
    stock: 11,
  },
  {
    id: 8,
    name: "Wine - Jafflin Bourgongone",
    description:
      "In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst.",
    imageUrl: "http://dummyimage.com/229x100.png/ff4444/ffffff",
    stock: 93,
  },
  {
    id: 9,
    name: "Pate - Liver",
    description:
      "Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    imageUrl: "http://dummyimage.com/204x100.png/cc0000/ffffff",
    stock: 25,
  },
  {
    id: 10,
    name: "Higashimaru Usukuchi Soy",
    description:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    imageUrl: "http://dummyimage.com/177x100.png/dddddd/000000",
    stock: 88,
  },
];
