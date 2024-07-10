"use client";

import { useState } from "react";

const CreateEditForm = () => {
  const [title, setTitle] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Handle form submission logic here, including file
    if (file) {
      console.log("File name:", file.name);
      console.log("File type:", file.type);
      console.log("File size:", file.size);
      // You can further process the file or send it to your backend here
    } else {
      console.log("No file selected");
    }
  };

  const handleCancel = () => {
    // Add your cancel action here
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <>
    <div className="min-w-[300px] lg:block hidden">
      <form onSubmit={handleSubmit}>
        <div className="lg:grid grid-cols-2">
          <div>
            <div className="mb-16 flex items-center justify-start w-full">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full min-w-[473px] max-w-[473px] h-full min-h-[504px] border-2 border-[#fff] border-dashed rounded-lg cursor-pointer bg-[#224957]"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-4 text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-white font-normal">
                    Drop an image here
                  </p>
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </label>
            </div>
          </div>
          <div>
            <div className="mb-6">
              <input
                style={{ backgroundColor: "#224957" }}
                className="bg-[#224957] rounded-[10px] px-4 py-2.5 text-sm text-white font-normal w-full leading-6 min-w-[362px] max-w-[362px]"
                type="text"
                id="title"
                placeholder="Title"
                value={title}
                onChange={e => setTitle(e.target.value)}
              />
            </div>
            <div className="mb-6 block">
              <input
                className="bg-[#224957] rounded-[10px] px-4 py-2.5 text-sm text-white font-normal leading-6"
                type="text"
                id="releaseDate"
                placeholder="Publishing year"
                value={releaseDate}
                onChange={e => setReleaseDate(e.target.value)}
              />
            </div>
            <div className="inline-flex gap-4">
              <button
                type="button"
                onClick={handleCancel}
                className="border border-[#FFFFFF] rounded-[10px] py-[15px] px-14 text-base font-bold leading-6 text-white w-full min-w-[167px]"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-[#2BD17E] rounded-[10px] py-[15px] px-14 text-base font-bold leading-6 text-white w-full min-w-[179px]"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
    <div className="lg:hidden block">
    <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <input
            style={{ backgroundColor: "#224957" }}
            className="bg-[#224957] rounded-[10px] px-4 py-2.5 text-sm text-white font-normal w-full leading-6 lg:min-w-[362px] lg:max-w-[362px]"
            type="text"
            id="title"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <input
            className="bg-[#224957] rounded-[10px] px-4 py-2.5 text-sm text-white font-normal leading-6 lg:w-auto w-full"
            type="text"
            id="releaseDate"
            placeholder="Publishing year"
            value={releaseDate}
            onChange={(e) => setReleaseDate(e.target.value)}
          />
        </div>
        <div className="lg:mb-16 mb-10 flex items-center justify-start w-full">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full lg:min-w-[473px] lg:max-w-[473px] h-full lg:min-h-[504px] min-h-[372px] border-2 border-[#fff] border-dashed rounded-lg cursor-pointer bg-[#224957]"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                className="w-8 h-8 mb-4 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-white font-normal">
                Drop an image here
              </p>
            </div>
            <input
              id="dropzone-file"
              type="file"
              className="hidden"
              onChange={handleFileChange}
            />
          </label>
        </div>
        <div className="inline-flex gap-4">
          <button
            type="button"
            onClick={handleCancel}
            className="border border-[#FFFFFF] rounded-[10px] py-[15px] px-14 text-base font-bold leading-6 text-white w-full min-w-[167px]"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-[#2BD17E] rounded-[10px] py-[15px] px-14 text-base font-bold leading-6 text-white w-full min-w-[179px]"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
    </>
  );
};

export default CreateEditForm;
