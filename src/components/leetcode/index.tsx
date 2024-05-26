import { useState, useEffect } from "react";
import { get } from "lodash";
import axios from "axios";
import to from "await-to-js";
import moment from "moment";
import { BASIC_DETAIL_URL } from "./common";
import { IDetail, IRecent, IDifficulty } from "./interface";

export default function Leetcode() {
  const [detail, setDetail] = useState<IDetail>();
  const [recent, setRecent] = useState<IRecent[]>();

  const fetchRecent = async () => {
    const [err, data] = await to(
      axios({
        method: "get",
        url: "http://localhost:8079/api/v1/common/recent",
      })
    );
    if (err) {
      alert("数据获取失败!");
      return;
    }
    const result: IRecent[] = get(data, "data.data.recentACSubmissions", []);
    setRecent(result);
  };
  const fetchProgress = async () => {
    const [err, data] = await to(
      axios({
        method: "get",
        url: "http://localhost:8079/api/v1/common/usr/progress",
      })
    );
    if (err) {
      alert("数据获取失败!");
      return;
    }
    const result: IDetail = get(
      data,
      "data.data.userProfileUserQuestionProgress",
      {}
    );
    setDetail(result);
  };

  useEffect(() => {
    fetchProgress();
    fetchRecent();
  }, []);

  return (
    <div>
      <div className="text-lg mb-2 mt-8 font-[1000]">leetcode</div>
      <div className="mb-2">
        {get(detail, "numAcceptedQuestions", [])?.map(
          (item: IDifficulty, index: number) => (
            <span key={get(item, "difficulty", index)} className="mr-2">
              <span className="mr-1">{get(item, "difficulty", "-")}:</span>
              <span className="font-[800]">{get(item, "count", 0)}</span>
              <span>/</span>
              <span>
                {get(item, "count", 0) +
                  get(detail, `numFailedQuestions[${index}].count`, 0) +
                  get(detail, `numUntouchedQuestions[${index}].count`, 0)}
              </span>
            </span>
          )
        )}
      </div>
      <ul>
        {recent?.map((item, index) => (
          <li key={get(item, "submissionId", index)}>
            <b className="mr-1">
              {moment(get(item, "submitTime", 0) * 1000).format("YYYY/MM/DD")}
            </b>
            <a
              className="underline visited:text-gray-500"
              href={`${BASIC_DETAIL_URL}${get(item, "submissionId", "")}`}
              target="_blank"
            >
              {get(item, "question.title", "-")}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
