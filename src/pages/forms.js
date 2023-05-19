const Forms = () => {
    const [formButtons,  setFormButtons] =useState("")

    const formCreator = () => {
        
    }

 const forms = GetData("forms/form1");

  return (
    <div>
      <div>hi</div>
    </div>
  );
};
export default Forms


export const getServerSideProps = withSessionSsr(async ({ req, res }) => {
  const user = req.session.user;

 

  if (!user) {
    return {
      notFound: true,
    };
  }
  return {
    props: { user, forms },
  };
});


