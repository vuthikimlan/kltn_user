"use client";
import { getAssignment } from "@/api/course";
import { List } from "antd";
import Link from "next/link";
import { Key, useEffect, useState } from "react";
import Cookies from "js-cookie";

function AssignmentList(courseId: any) {
  const id = courseId.courseId;
  const [data, setData] = useState<any>([]);
  const idUser = Cookies.get("idUser");

  const handleGetAssignment = () => {
    getAssignment(id).then((res) => {
      setData(res?.data?.data);
    });
  };
  useEffect(() => {
    handleGetAssignment();
  }, []);
  return (
    <div>
      <h1>Danh sách các bài tập</h1>
      <List
        itemLayout="horizontal"
        className="demo-loadmore-list border-b-[1px] border-solid  "
        dataSource={data}
        renderItem={(item: any, ind: Key) => (
          <List.Item
            actions={[
              <div key={ind}></div>,
              <Link href={`/user/doAssignment/${id}/${item?._id}`} key={ind}>
                Làm bài tập
              </Link>,
              <span key={ind}>
                {item?.submissions.find((sub: any) => sub.userId === idUser) ? (
                  <>
                    {
                      item?.submissions.find(
                        (sub: any) => sub.userId === idUser
                      ).score
                    }
                    /
                    {
                      item?.submissions.find(
                        (sub: any) => sub.userId === idUser
                      ).totalQuestions
                    }{" "}
                    điểm`
                  </>
                ) : (
                  <></>
                )}
              </span>,
            ]}
          >
            <List.Item.Meta
              title={<p>{item.nameAssignment}</p>}
              //   description={<p>{item.descriptionAssignment}</p>}
            />
          </List.Item>
        )}
      />
    </div>
  );
}

export default AssignmentList;
