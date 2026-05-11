export const DateSpan = ({
  startDate,
  endDate,
}: {
  startDate: string;
  endDate?: string;
}) => {
  return (
    <p>
      <span>
        {new Date(startDate).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
        })}
      </span>
      -
      <span>
        {endDate
          ? new Date(endDate).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
            })
          : "Present"}
      </span>
    </p>
  );
};
