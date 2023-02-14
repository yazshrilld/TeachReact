//logout function

const LogoutButton = () => {
    const navigate = useNavigate();
  
    const handleClick = () => {
      sessionStorage.removeItem("Customer360");
      sessionStorage.removeItem("name");
      sessionStorage.removeItem("branch");
      sessionStorage.removeItem("adminRole");
      sessionStorage.removeItem("accNum");
      navigate("/login");
    };
  
    return (
      <button
        onClick={handleClick}
        className={`flex items-center justify-center gap-2 px-5 py-3 md:py-2 text-sm md:text-md  bg-[#FF5050] text-white  hover:bg-opacity-90 active:ring-offset-2 active:ring-[#FF5050] active:ring-2 duration-300 rounded-md font-bold absolute md:static right-[15px] top-[12px]`}
      >
        Logout
      </button>
    );
  };

  //using .map and  object constructuring

  const data = res?.data.data?.map((dt) => {
    const { traAmt, traDate, drCrDesc, balAfter, remarks, ...others } = dt;
    return {
      amount: dt.traAmt,
      transaction_date: traDate,
      type: dt.drCrDesc === "D" ? "Debit" : "Credit",
      description: dt.remarks,
      balance: dt.balAfter,
      ...others,
    };
  });

  if (!data.length) {
    toast.warning("No transactions for this period");
  }

  //adding "," & "and" to array of words to display
  function makeString(arr) {
    if (arr.length === 1) return arr[0];
    const firsts = arr.slice(0, arr.length - 1);
    const last = arr[arr.length - 1];
    return firsts.join(', ') + ' and ' + last;
  }
  
  console.log(makeString(['one', 'two', 'three', 'four']));
  console.log(makeString(['one']));

  //we can use fliter to remove multiple thing from an array
  function remove(arr) {
    const myArr = arr * arr.length
    arr.map(x => myArr[x]).filter(x => x !== undefined)
  }

  