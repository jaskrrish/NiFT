import React, { useState } from "react";
import { IoIosWallet } from "react-icons/io";

function Header() {
  const [walletAddress, setWalletAddress] = useState(null);
  const [networkId, setNetworkId] = useState(null);
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const changeMetaMask = () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((accounts) => {
          acntChgHandler(accounts[0]);
          setIsWalletConnected(true);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("Please install MetaMask");
    }
  };

  const acntChgHandler = (account) => {
    setWalletAddress(account);

    window.ethereum.request({ method: "net_version" }).then((network) => {
      setNetworkId(network);
    });
  };

  return (
    <>
      <nav className="bg-black">
        <div className="flex justify-center items-center">
          <div className="m-4 p-4">
            <a href="" className="text-2xl text-white font-semibold ">
              NiFT
            </a>
          </div>
          <div className="mx-4 ml-auto mr-8">
            <ul className="text-white flex text-xl font-sans items-center justify-center ">
              <li className="mx-3 ">
                <a href="">Home</a>
              </li>
              <li className="mx-3">
                <a href="">Explore</a>
              </li>
              {isWalletConnected ? (
                <div className="flex">
                  <li className="mx-3">
                    <a href="">MarketSpace</a>
                  </li>
                  <li className="mx-3">
                    <a href="">FundSpace</a>
                  </li>
                </div>
              ) : null}
              <li className="mx-3">
                <a href="">About Us</a>
              </li>

              {isWalletConnected ? (
                <div>
                  <IoIosWallet
                    className={`text-[#99ff53] mx-3 cursor-pointer `}
                    size={40}
                    onMouseEnter={() => setShowDropdown(true)}
                    onMouseLeave={() => setShowDropdown(false)}
                  />
                  {showDropdown && (
                    <div className="absolute top-auto right-0 bg-[#7cfc00] text-black p-4 mr-2 rounded-lg wallet-details">
                      <p>Connected Wallet:</p>
                      <p>
                        Address:{" "}
                        {`${walletAddress.substring(
                          0,
                          4
                        )}...${walletAddress.slice(-3)}`}
                      </p>
                      <p>Network ID: {networkId}</p>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  className="m-4 bg-[#99ff53] rounded-xl p-3 text-black"
                  onClick={changeMetaMask}
                >
                  Connect Your Wallet
                </button>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
