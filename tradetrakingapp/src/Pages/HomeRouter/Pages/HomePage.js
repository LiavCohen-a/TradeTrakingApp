import '../../../Css/HomePage.css';
function HomePage() { 
  return (
    <div className="HomePageContainer">
      <div className="Border TextDataContainer FlexCenter">
        <div className="Header FlexCenter"><h4><b>What is CryptoCurrency?</b></h4></div>
        <div>
        Cryptocurrency is a digital payment system that doesn't rely on banks to verify transactions.
        It’s a peer-to-peer system that can enable anyone anywhere to send and receive payments.
        nstead of being physical money carried around and exchanged in the real world, cryptocurrency payments exist purely as digital entries to an online database describing specific transactions. When you transfer cryptocurrency funds, the transactions are recorded in a public ledger.
        Cryptocurrency is stored in digital wallets.<br/><br/>
        Cryptocurrency received its name because it uses encryption to verify transactions.
        This means advanced coding is involved in storing and transmitting cryptocurrency data between wallets and to public ledgers.
        The aim of encryption is to provide security and safety.<br/><br/>
        The first cryptocurrency was Bitcoin, which was founded in 2009 and remains the best known today.
        Much of the interest in cryptocurrencies is to trade for profit, with speculators at times driving prices skyward.
        </div>
        </div>
        <div className="Border TextDataContainer FlexCenter">
        <h4><b></b></h4>
        <div className="Header FlexCenter"><h4><b>How does CryptoCurrency work?</b></h4></div>

        <div>
        Cryptocurrencies run on a distributed public ledger called blockchain, a record of all transactions updated and held by currency holders.<br/><br/>
        Units of cryptocurrency are created through a process called mining, which involves using computer power to solve complicated mathematical problems that generate coins. Users can also buy the currencies from brokers, then store and spend them using cryptographic wallets.<br/><br/>
        If you own cryptocurrency, you don’t own anything tangible. What you own is a key that allows you to move a record or a unit of measure from one person to another without a trusted third party.<br/><br/>
        Although Bitcoin has been around since 2009, cryptocurrencies and applications of blockchain technology are still emerging in financial terms, and more uses are expected in the future. Transactions including bonds, stocks, and other financial assets could eventually be traded using the technology.           </div>
        </div>
        <div className="Border TextDataContainer FlexCenter">
        <div className="Header FlexCenter"><h4><b>What is a blockchain?</b></h4></div>

        <h4><b></b></h4>
        <div>
        Blockchain is a distributed ledger (a list of transactions) that allows for information to be captured and shared in a network. In this network, each member maintains their own copy of the information and all members must validate and store each update collectively. By doing so, every member is always working with the same information which can provide online systems a single source of truth to work with. In a way blockchains are very similar to a Google sheet but slightly different as blockchains only allow data to be added and once added, it can never be removed.<br/><br/>
        Blockchain has three basic functionalities which can provide many different solutions for agri-food supply chains and smallholder farmers. Firstly, blockchain facilitates direct peer to peer transactions. Secondly, blockchain facilitates fully transparent and secure data storage. Lastly, blockchain allows for logic and agreements to be executed automatically. These three basic features can ultimately lead to more inclusion, more transparency and better cooperation within food supply chains.
     
        </div>
        </div>   <br/><br/><br/><br/>
    </div>
  );
}

export default HomePage;
