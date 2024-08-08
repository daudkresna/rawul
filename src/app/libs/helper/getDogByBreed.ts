export const getDogBreedImage = async (breed: string) => {
  const res = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`, {
    cache: "no-cache",
  });

  if (!res.ok) {
    return new Error("Something went wrong");
  }
  return await res.json();
};

export const getDogImage = async () => {
  const res = await fetch("https://dog.ceo/api/breeds/image/random", {
    cache: "no-cache",
    next: {
      tags: ["random"],
    },
  });

  if (!res.ok) {
    return new Error("Something went wrong");
  }
  return await res.json();
};
