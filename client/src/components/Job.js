import moment from "moment";

const Job = ({ company, createdAt }) => {
  let date = moment(createdAt);
  date = date.format("Do MMM, YYYY");
  return (
    <div>
      <h5>{company}</h5>
      <h5>{date}</h5>
    </div>
  );
};

export default Job;
