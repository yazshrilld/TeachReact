import React from 'react'

const showDetails = () => {

    const customershowDetails = [
        {
            customerName: 'Yazid',
            customerName: 'Yazid',
            customerName: 'Yazid',
            customerName: 'Yazid',
            customerName: 'Yazid',
            customerName: 'Yazid',
            customerName: 'Yazid',
            customerName: 'Yazid',
            customerName: 'Yazid',
            customerName: 'Yazid',n
        }
    ]

    const showshowDetail = () => (
        <div className="flex items-center justify-between text-sm px-4 py-2 text-black">
            <h3 className="font-bold uppercase">{title}: </h3>
            <p className={`font-medium`}>{content}</p>
        </div>
    )

  return (
    <>
        <div className="pt-2 pb-4 bg-white rounded-md shadow-lg h-[100%]">
            <h2 className="font-bold text-sm px-4 py-1 border-b md:text-base text-black mb-4 uppercase">
            Customer showDetails
            </h2>
            <showDetail title="Customer Name" content={customershowDetails.customerName} />
            <showDetail title="Customer Id" content={customershowDetails.customerId} />
            <showDetail title="Account Number" content={customershowDetails.accountNumber} />
            <showDetail
            title="Account Balance"
            content={`${formatCurrency(customershowDetails?.accountBalance) || 0}`}
            />
            <showDetail
            title="Ledger Balance"
            content={`${formatCurrency(customershowDetails?.ledgerBalance) || 0}`}
            />
            <showDetail title="Sort Code" content={customershowDetails?.sortCode} />
            <showDetail title="Branch" content={customershowDetails?.branch} />
            <showDetail title="Bvn" content={customershowDetails?.bvn} />
            <showDetail title="Tax" content={customershowDetails?.tax} />
            <showDetail
            title="Account Opening Date"
            content={customershowDetails.dateOpened}
            />
            <showDetail
            title="Account Status"
            content={customershowDetails.accountStatus}
            primary={customershowDetails.accountStatus === "Active"}
            />
            {checkSig && (
            <button
                className="my-2 bg-[#FBB900] ml-2 py-2 min-w-[150px] text-white font-bold rounded-lg shadow active:ring active:ring-[#FBB900] hover:opacity-75 ease-in-out"
                onClick={showSignatureModal}
            >
                Show Signature
            </button>
            )}
        </div>
    </>
  )
}

export default showDetails