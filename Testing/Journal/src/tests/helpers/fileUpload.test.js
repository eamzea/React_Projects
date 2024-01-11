import "@testing-library/jest-dom";
import cloudinary from "cloudinary";
import { fileUpload } from "../../helpers/fileUpload";

cloudinary.config({
  cloud_name: "dsrp4vbij",
  api_key: "857884388273543",
  api_secret: "lVoMJhFfy10Su_4JWzbpTbz7xls",
});

describe("Pruebas en fileUpload", () => {
  test("Debe de cargar un archivo y retornar un url ", async (done) => {
    const response = await fetch(
      "https://miro.medium.com/max/11226/1*gW4FRfJ1vkvnSybAvWTerg.jpeg"
    );
    const blob = await response.blob();
    const file = new File([blob], "foto.jpeg");
    const url = await fileUpload(file);

    expect(typeof url).toBe("string");

    const segments = url.split("/");
    const imageId = segments[segments.length - 1].split(".").splice(0, 1)[0];

    cloudinary.v2.api.delete_resources(imageId, {}, () => {
      done();
    });
  });

  test("Debe de retornar un error", async () => {
    const file = new File([], "foto.png");

    const url = await fileUpload(file);

    expect(url).toBe(null);
  });
});
