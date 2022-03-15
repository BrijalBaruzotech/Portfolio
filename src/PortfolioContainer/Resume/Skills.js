export default function Skills() {
  const programmingSkills = [
    { skill: "React.js" },
    { skill: "Javascript" },
    { skill: "HTML" },
    { skill: "Python" },
  ];
  return (
    <div className="flex flex-col justify-center p-12">
      {programmingSkills.map((data) => {
        return (
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-row justify-center items-center">
              <div className="flex justify-center items-center"><div className="w-3 h-3 bg-orange-600 rounded-full"></div></div>
              <div className="flex justify-center items-center p-3">{data.skill}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
