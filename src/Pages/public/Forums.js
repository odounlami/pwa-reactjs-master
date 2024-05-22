import React from "react";
import { Img, Text, Button, Heading } from "../../components";

export default function ForumPage() {
  return (
    <>
      <div className="w-full bg-gray-900"/>
              <div className="flex flex-col gap-px">
                <div className="flex md:flex-col justify-between items-center gap-5 p-3 md:p-5 bg-gray-900 flex-1">
                  <div className="flex items-center w-[62%] md:w-full ml-1 gap-4 md:ml-0">
                    <Img
                      src="images/img_depth_6_frame_0_56x99.png"
                      alt="club_danse_one"
                      className="w-[18%] object-cover rounded"
                    />
                    <div className="w-[26%]">
                      <div className="flex justify-center">
                        <div className="flex">
                          <Text size="s" as="p" className="!text-white-A700">
                            Club Danse
                          </Text>
                        </div>
                      </div>
                      <div className="flex justify-center">
                        <div className="flex">
                          <Text as="p">1:00 PM</Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Img
                    src="images/img_depth_6_frame_0.svg"
                    alt="club_danse"
                    className="h-[28px] w-[28px] mr-1 md:mr-0"
                  />
                </div>
                <div className="flex md:flex-col justify-between items-center gap-5 p-3 md:p-5 bg-gray-900 flex-1">
                  <div className="flex items-center w-[62%] md:w-full ml-1 gap-4 md:ml-0">
                    <Img
                      src="images/img_depth_6_frame_0_56x99.png"
                      alt="image"
                      className="w-[18%] object-cover rounded"
                    />
                    <div className="w-[26%]">
                      <div className="flex justify-center">
                        <div className="flex">
                          <Text size="s" as="p" className="self-end !text-white-A700">
                            Club Robotique
                          </Text>
                        </div>
                      </div>
                      <div className="flex justify-center">
                        <div className="flex">
                          <Text as="p">3:00 PM</Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Img
                    src="images/img_depth_6_frame_0.svg"
                    alt="image_one"
                    className="h-[28px] w-[28px] mr-1 md:mr-0"
                  />
                </div>
                <div className="flex md:flex-col justify-between items-center gap-5 p-3 md:p-5 bg-gray-900 flex-1">
                  <div className="flex items-center w-[62%] md:w-full ml-1 gap-4 md:ml-0">
                    <Img
                      src="images/img_depth_6_frame_0_56x99.png"
                      alt="image"
                      className="w-[18%] object-cover rounded"
                    />
                 <div className="w-[26%]">
                      <div className="flex justify-center">
                        <div className="flex">
                          <Text size="s" as="p" className="!text-white-A700">
                            Club Otaku
                          </Text>
                        </div>
                      </div>
                      <div className="flex justify-center">
                        <div className="flex">
                          <Text as="p">1:00 PM</Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    </>
  );
}
