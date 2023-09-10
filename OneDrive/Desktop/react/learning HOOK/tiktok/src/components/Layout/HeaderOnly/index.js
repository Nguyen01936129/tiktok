import Header from 'src/components/Layout/components/Header';

function HeaderOnly({ children }) {
   return (
      <div>
         <Header />
         <div className="container">
            <div className="contain">{children}</div>
         </div>
      </div>
   );
}

export default HeaderOnly;
