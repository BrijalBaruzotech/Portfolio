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
            <div className="grid grid-cols-2">
              <div className="flex w-12 h-12 justify-center items-center p-4"><div className="w-3 h-3 bg-orange-600 rounded-full"></div></div>
              <div className="flex w-12 h-12 justify-center items-center p-4">{data.skill}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
