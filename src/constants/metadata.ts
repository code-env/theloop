import { Metadata } from "next";

function headContent(title: string, desc: string) {
  metadata: () => {
    const data: Metadata = {
      title: title,
      description: desc,
    };
    return data;
  };
}

// export { headContent };
