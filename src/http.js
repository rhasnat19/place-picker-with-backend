export async function fetchAvailablePlaces() {
  const responseData = await fetch("http://localhost:3000/places");
  const resData = await responseData.json();

  if (!responseData.ok) {
    const error = new Error("Failed to fetch places");
    throw error;
  }

  return resData.places;
}

export async function fetchUserPlaces() {
  const responseData = await fetch("http://localhost:3000/user-places");
  const resData = await responseData.json();

  if (!responseData.ok) {
    const error = new Error("Failed to fetch user places");
    throw error;
  }

  return resData.places;
}

export async function updateUserPlaces(places) {
  const responseData = await fetch("http://localhost:3000/user-places", {
    method: "PUT",
    body: JSON.stringify({ places }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const resData = await responseData.json();

  if (!responseData.ok) {
    const error = new Error("Failed to update user places");
    throw error;
  }

  return resData.message;
}
