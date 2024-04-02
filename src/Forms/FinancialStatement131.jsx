import React, { useState } from 'react'
import { Margin, usePDF } from 'react-to-pdf';

const FinancialStatement131 = () => {
    const { toPDF, targetRef } = usePDF({
        method: "save",
        filename: "Financial-Statement-131.pdf",
        page: { margin: Margin.SMALL },
    });

    const handleDownload = () => {
        toPDF()
    }
    const [formData, setFormData] = useState({
        courtName: '',
        courtFileNumber: '',
        courtOfficeAddress: '',

        applicant: {
            fullLegalName: '',
            address: '',
            phoneAndFax: '',
            email: '',
        },
        applicantsLawyer: {
            fullLegalName: '',
            address: '',
            phoneAndFax: '',
            email: '',
        },
        respondent: {
            fullLegalName: '',
            address: '',
            phoneAndFax: '',
            email: '',
        },
        respondentsLawyer: {
            fullLegalName: '',
            address: '',
            phoneAndFax: '',
            email: '',
        },

        filledBy: 'respondent',
        filler: {
            fullLegalName: '',
            province: '',
        },

        // Income
        income: {
            employmentStatus: '',
            employer: '',
            business: '',
            unemployedDate: '',

            attachments: {
                payChequeStub: false,
                socialAssistanceStub: false,
                pensionStub: false,
                workersCompensationStub: false,
                employmentInsuranceStub: false,
                statementOfIncome: false,
                other: false,
            },

            lastYearGrossIncome: '',
            attachementsAcknowledgment: '',

            sources: {
                employmentIncome: '',
                commissionTipsBonuses: '',
                selfEmploymentIncome: '',
                employmentInsuranceBenefits: '',
                workersCompensationBenefits: '',
                socialAssistanceIncome: '',
                interestInvestmentIncome: '',
                pensionIncome: '',
                spousalSupport: '',
                childTaxBenefits: '',
                otherIncome: '',
                totalMonthlyIncome: '',
                totalAnnualIncome: '',
            },

            otherBenefits: {
                b1: { item: '', details: '', yearlyMarketValues: '' },
                b2: { item: '', details: '', yearlyMarketValues: '' },
                b3: { item: '', details: '', yearlyMarketValues: '' },
                b4: { item: '', details: '', yearlyMarketValues: '' },
            },
        },

        // Expenses
        expenses: {
            automaticDeductions: {
                cppContributions: '',
                eiPremiums: '',
                incomeTaxes: '',
                employeePensionContributions: '',
                unionDues: '',
                subtotal: '',
            },
            housing: {
                rentOrMortgage: '',
                propertyTaxes: '',
                propertyInsurance: '',
                condominiumFees: '',
                repairsAndMaintenance: '',
                subtotal: '',
            },
            utilities: {
                water: '',
                heat: '',
                electricity: '',
                telephone: '',
                cellPhone: '',
                cable: '',
                internet: '',
                subtotal: '',
            },
            householdExpenses: {
                groceries: '',
                householdSupplies: '',
                mealsOutsideTheHome: '',
                petCare: '',
                laundryAndDryCleaning: '',
                subtotal: '',
            },
            childcare: {
                daycare: '',
                babysitting: '',
                subtotal: '',
            },

            transportation: {
                publicTransit: '',
                carPayments: '',
                gasAndOil: '',
                insurance: '',
                repairsAndMaintenance: '',
                parking: '',
                subtotal: '',
            },
            health: {
                insurance: '',
                dental: '',
                medicine: '',
                eyecare: '',
                subtotal: '',
            },
            personal: {
                clothing: '',
                haircare: '',
                alcohol: '',
                education: '',
                entertainment: '',
                gifts: '',
                subtotal: '',
            },
            other: {
                lifeInsurance: '',
                rrsp: '',
                vacations: '',
                school: '',
                clothingForChildren: '',
                childrenActivities: '',
                summerCamp: '',
                debtPayments: '',
                supportPaidForOtherChildren: '',
                other: '',
                subtotal: '',
            },
            totalMonthlyExpenses: '',
            totalYearlyExpenses: '',

        },

        // Other Income Earners
        otherIncomeEarners: {
            liveAlone: false,
            isLivingWith: false,
            livingWith: '',
            isAdults: false,
            adults: '',
            isChildren: false,
            children: '',
            partner: {
                isWorks: '',
                worksAt: '',
                isEarns: '',
                earns: '',
                earnsPer: '',
                contributions: '',
                contributionsPer: '',
            }
        },

        // Assets
        assets: {
            dateOfMarriage: '',
            dateOfValuation: '',
            dateOfCommencement: '',
            land: {
                ownership: '',
                address: '',
                onDateOfMarriage: '',
                onValuationDate: '',
                today: '',
                total1: '',
                total2: '',
            },
            household: {
                furniture: {
                    description: '',
                    indication: '',
                    onDateOfMarriage: '',
                    onValuationDate: '',
                    today: '',
                },
                vehicles: {
                    description: '',
                    indication: '',
                    onDateOfMarriage: '',
                    onValuationDate: '',
                    today: '',
                },
                equipment: {
                    description: '',
                    indication: '',
                    onDateOfMarriage: '',
                    onValuationDate: '',
                    today: '',
                },
                other: {
                    description: '',
                    indication: '',
                    onDateOfMarriage: '',
                    onValuationDate: '',
                    today: '',
                },
                total1: '',
                total2: '',
            },
            bank: {
                category: '',
                description: '',
                accountNumber: '',
                onDateOfMarriage: '',
                onValuationDate: '',
                today: '',
                total1: '',
                total2: '',
            },
            life: {
                company: '',
                owner: '',
                beneficiary: '',
                faceAmount: '',
                onDateOfMarriage: '',
                onValuationDate: '',
                today: '',
                total1: '',
                total2: '',
            },
            interests: {
                company: '',
                interest: '',
                onDateOfMarriage: '',
                onValuationDate: '',
                today: '',
                total1: '',
                total2: '',
            },
            moneyOwed: {
                details: '',
                onDateOfMarriage: '',
                onValuationDate: '',
                today: '',
                total1: '',
                total2: '',
            },
            otherProperty: {
                category: '',
                details: '',
                onDateOfMarriage: '',
                onValuationDate: '',
                today: '',
                total1: '',
                total2: '',
                totalOwned: '',
            },
            debts: {
                category: '',
                details: '',
                onDateOfMarriage: '',
                onValuationDate: '',
                today: '',
                total1: '',
                total2: '',
            },
            property: {
                land: {
                    assets: '',
                    liabilities: '',
                },
                household: {
                    assets: '',
                    liabilities: '',
                },
                bank: {
                    assets: '',
                    liabilities: '',
                },
                life: {
                    assets: '',
                    liabilities: '',
                },
                interests: {
                    assets: '',
                    liabilities: '',
                },
                moneyOwed: {
                    assets: '',
                    liabilities: '',
                },
                otherProperty: {
                    assets: '',
                    liabilities: '',
                },
                debts: {
                    assets: '',
                    liabilities: '',
                },
                total1: '',
                total2: '',
                netValue1: '',
                netValue2: '',
                valueOfDeductions1: '',
                valueOfDeductions2: '',
            },
            excluded: {
                category: '',
                details: '',
                onValuationDate: '',
                total: '',
            },
            disposed: {
                category: '',
                details: '',
                value: '',
                total: '',
            },
            calculations: {
                allProperty: '',
                subtractDeductions: {
                    deductions: '',
                    balance: '',
                },
                subtractExcluded: {
                    deductions: '',
                    balance: '',
                },
                netFamilyProperty: '',
            },
        },

        // Declaration
        declaration: {
            muncipility: '',
            state: '',
            date: '',
            signature: '',
            sigName: '',
        },

        // Schedule A
        scheduleA: {
            incomeSources: {
                partnership: '',
                rental: '',
                dividends: '',
                capital: '',
                retirement: '',
                annuity: '',
                other: '',
            },
            totalIncome: '',
        },

        // Schedule B
        scheduleB: {
            expenses: {
                child1: {
                    name: '',
                    expenses: '',
                    amount: '',
                    tax: '',
                },
                child2: {
                    name: '',
                    expenses: '',
                    amount: '',
                    tax: '',
                },
                child3: {
                    name: '',
                    expenses: '',
                    amount: '',
                    tax: '',
                },
                child4: {
                    name: '',
                    expenses: '',
                    amount: '',
                    tax: '',
                },
                child5: {
                    name: '',
                    expenses: '',
                    amount: '',
                    tax: '',
                },
                child6: {
                    name: '',
                    expenses: '',
                    amount: '',
                    tax: '',
                },
                child7: {
                    name: '',
                    expenses: '',
                    amount: '',
                    tax: '',
                },
                child8: {
                    name: '',
                    expenses: '',
                    amount: '',
                    tax: '',
                },
                child9: {
                    name: '',
                    expenses: '',
                    amount: '',
                    tax: '',
                },
                child10: {
                    name: '',
                    expenses: '',
                    amount: '',
                    tax: '',
                },
                totalYearlyAmount: '',
                totalMonthlyAmount: '',
            },
            amIEarn: false,
            iEarn: '',
        },
    });

    function fillFormData(key, defaultVal = null) {
        return (e) => {
            const updatedFormData = { ...formData };

            const keys = key.split('.');
            const value = e.target.value;

            let nestedObj = updatedFormData;
            for (let i = 0; i < keys.length; i++) {
                const k = keys[i];
                if (i === keys.length - 1) {
                    nestedObj[k] = defaultVal ? defaultVal : value;
                } else {
                    nestedObj[k] = { ...nestedObj[k] };
                    nestedObj = nestedObj[k];
                }
            }

            setFormData(updatedFormData);
            console.log("🚀 ~ return ~ formData:", formData)
        };
    }

    function changeFormCheck(key) {
        return (e) => {
            const updatedFormData = { ...formData };
            const value = e.target.checked;

            const keys = key.split('.');

            let nestedObj = updatedFormData;
            for (let i = 0; i < keys.length; i++) {
                const k = keys[i];
                if (i === keys.length - 1) {
                    nestedObj[k] = value;
                } else {
                    nestedObj[k] = { ...nestedObj[k] };
                    nestedObj = nestedObj[k];
                }
            }

            setFormData(updatedFormData);
            console.log("🚀 ~ return ~ formData:", formData)
        };
    }

    return (
        <div>
            <div className="pdf-form pdf-form-13b" ref={targetRef} >
                {/* <div className="pdf-form pdf-form-13b" ref={targetRef} style={{ backgroundColor: '#fff' }}> */}
                {/* Form Name */}
                <div className="row text-center mb-4">
                    <div className="col-12">
                        <div className="fw-bold fst-italic">
                            ONTARIO
                        </div>
                    </div>
                </div>

                {/* Form Details */}
                <div className="row">
                    <div className="col-9">
                        <div className="row justify-content-end">
                            <div className="col-11">
                                <div className="form-group align-items-center">
                                    <input type="text" className="form-control" id="at" name="at" value={formData.courtName}
                                        onChange={fillFormData('courtName')} />
                                    <div className="fst-italic">(Name of Court)</div>
                                </div>
                            </div>
                        </div>
                        <div className="row  justify-content-end">
                            <div className="col-1 fw-bold mt-2" style={{ paddingLeft: '40px' }}>at</div>
                            <div className="col-11">
                                <div className="form-group align-items-center">
                                    <input type="text" className="form-control" id="at" name="at"
                                        value={formData.courtOfficeAddress}
                                        onChange={fillFormData('courtOfficeAddress')} />
                                    <div className="fst-italic">Court office address</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-3">
                        <div className="row">
                            <div className="col-12">
                                <div className="form-group" style={{ marginTop: '-25px' }}>
                                    <span className="text-nowrap">Court File Number</span>
                                    <input type="text" className="form-control border-1 border-dark" id="at" name="at"
                                        value={formData.courtFileNumber}
                                        onChange={fillFormData('courtFileNumber')} />
                                </div>
                                <div className="fw-bolder text-end" style={{ marginTop: '-15px' }}>Form 13.1: Financial Statement (Property and Support Claims) sworn/affirmed
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Applicants */}
                <div className="row pb-20px pl-40px">
                    <div className="col-6">
                        <div className="fw-bolder">Applicant(s)</div>
                        <div className="data-group inputs border-1 border-dark">
                            <div className="data-input border-1 border-dark">
                                <div className="label">Full legal name:</div>
                                <input type="text" className="form-control" value={formData.applicant.fullLegalName}
                                    onChange={fillFormData('applicant.fullLegalName')} />
                            </div>
                            <div className="data-input border-1 border-dark">
                                <div className="label">Address:</div>
                                <input type="text" className="form-control" value={formData.applicant.address}
                                    onChange={fillFormData('applicant.address')} />
                            </div>
                            <div className="data-input border-1 border-dark">
                                <div className="label">Phone & fax:</div>
                                <input type="text" className="form-control" value={formData.applicant.phoneAndFax}
                                    onChange={fillFormData('applicant.phoneAndFax')} />
                            </div>
                            <div className="data-input border-1 border-dark">
                                <div className="label">Email:</div>
                                <input type="text" className="form-control" value={formData.applicant.email}
                                    onChange={fillFormData('applicant.email')} />
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="fw-bolder">Applicant(s) Lawyer</div>
                        <div className="data-group inputs border-1 border-dark">
                            <div className="data-input border-1 border-dark">
                                <div className="label">Full legal name:</div>
                                <input type="text" className="form-control" value={formData.applicantsLawyer.fullLegalName}
                                    onChange={fillFormData('applicantsLawyer.fullLegalName')} />
                            </div>
                            <div className="data-input border-1 border-dark">
                                <div className="label">Address:</div>
                                <input type="text" className="form-control" value={formData.applicantsLawyer.address}
                                    onChange={fillFormData('applicantsLawyer.address')} />
                            </div>
                            <div className="data-input border-1 border-dark">
                                <div className="label">Phone & fax:</div>
                                <input type="text" className="form-control" value={formData.applicantsLawyer.phoneAndFax}
                                    onChange={fillFormData('applicantsLawyer.phoneAndFax')} />
                            </div>
                            <div className="data-input border-1 border-dark">
                                <div className="label">Email:</div>
                                <input type="text" className="form-control" value={formData.applicantsLawyer.email}
                                    onChange={fillFormData('applicantsLawyer.email')} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Respondents */}
                <div className="row pb-20px pl-40px">
                    <div className="col-6">
                        <div className="fw-bolder">Respondent(s)</div>
                        <div className="data-group inputs border-1 border-dark">
                            <div className="data-input border-1 border-dark">
                                <div className="label">Full legal name:</div>
                                <input type="text" className="form-control" value={formData.respondent.fullLegalName}
                                    onChange={fillFormData('respondent.fullLegalName')} />
                            </div>
                            <div className="data-input border-1 border-dark">
                                <div className="label">Address:</div>
                                <input type="text" className="form-control" value={formData.respondent.address}
                                    onChange={fillFormData('respondent.address')} />
                            </div>
                            <div className="data-input border-1 border-dark">
                                <div className="label">Phone & fax:</div>
                                <input type="text" className="form-control" value={formData.respondent.phoneAndFax}
                                    onChange={fillFormData('respondent.phoneAndFax')} />
                            </div>
                            <div className="data-input border-1 border-dark">
                                <div className="label">Email:</div>
                                <input type="text" className="form-control" value={formData.respondent.email}
                                    onChange={fillFormData('respondent.email')} />
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="fw-bolder">Respondent(s) Lawyer</div>
                        <div className="data-group inputs border-1 border-dark">
                            <div className="data-input border-1 border-dark">
                                <div className="label">Full legal name:</div>
                                <input type="text" className="form-control" value={formData.respondentsLawyer.fullLegalName}
                                    onChange={fillFormData('respondentsLawyer.fullLegalName')} />
                            </div>
                            <div className="data-input border-1 border-dark">
                                <div className="label">Address:</div>
                                <input type="text" className="form-control" value={formData.respondentsLawyer.address}
                                    onChange={fillFormData('respondentsLawyer.address')} />
                            </div>
                            <div className="data-input border-1 border-dark">
                                <div className="label">Phone & fax:</div>
                                <input type="text" className="form-control" value={formData.respondentsLawyer.phoneAndFax}
                                    onChange={fillFormData('respondentsLawyer.phoneAndFax')} />
                            </div>
                            <div className="data-input border-1 border-dark">
                                <div className="label">Email:</div>
                                <input type="text" className="form-control" value={formData.respondentsLawyer.email}
                                    onChange={fillFormData('respondentsLawyer.email')} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Filled By */}
                <div className="row pb-20px pl-40px">
                    <div className="fw-bolder">This form is filled by:</div>
                    <div className="d-flex flex-row gap-4 pb-10px">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="filledBy" value="applicant" id="applicant"
                                checked={formData.filledBy === 'applicant'}
                                onChange={fillFormData('filledBy')} />
                            <label className="form-check-label" htmlFor="applicant">
                                Applicant
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="filledBy" value="respondent" id="respondent"
                                checked={formData.filledBy === 'respondent'}
                                onChange={fillFormData('filledBy')} />
                            <label className="form-check-label" htmlFor="respondent">
                                Respondent
                            </label>
                        </div>
                    </div>
                    {/* Separator */}
                    <div className="row pb-10px ml-10px border-top border-2 border-dark" />
                </div>


                {/* Instructions */}
                <div className="row pb-20px pl-40px">
                    <p className="sub-heading">Instructions</p>
                    <div className="paragraph">
                        <ol>
                            <li>
                                <p className="paragraph">
                                    USE THIS FORM IF:
                                </p>
                                <ul>
                                    <li>you are making or responding to a claim for property or exclusive possession of the
                                        matrimonial home and its contents; or
                                    </li>
                                    <li>you are making or responding to a claim for property or exclusive possession of the
                                        matrimonial home and its contents together with other claims for relief.
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <p className="paragraph">
                                    USE FORM 13 INSTEAD OF THIS FORM IF:
                                </p>
                                <ul>
                                    <li>you are making or responding to a claim for support but NOT making or responding to
                                        a claim for property or exclusive possession of the matrimonial home and its
                                        contents.
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <p className="paragraph">
                                    If you have income that is not shown in Part I of the financial statement (for example,
                                    partnership income, dividends, rental income, capital gains or RRSP income), you must
                                    also complete <strong>Schedule A</strong>.
                                </p>
                            </li>
                            <li>
                                <p className="paragraph">
                                    If you or the other party has sought a contribution towards special or extraordinary
                                    expenses for the child(ren), you must also complete <strong>Schedule B</strong>.
                                </p>
                            </li>
                        </ol>
                    </div>
                    <p className="paragraph fst-italic">
                        NOTE: You must <strong>fully and truthfully</strong> complete this financial statement, including
                        any applicable schedules. You must also provide the other party with documents relating to support
                        and property and a Certificate of Financial Disclosure (Form 13A) as required by Rule 13 of the
                        Family Law Rules.
                    </p>
                    {/* Separator */}
                    <div className="row pb-10px ml-10px border-top border-2 border-dark" />
                </div>

                <div className="row pb-20px pl-40px">
                    <ol>
                        {/* Personal Details */}
                        <li>
                            <div className="data-input">
                                <div className="label"><strong>My name is</strong> (full legal name)</div>
                                <input type="text" className="form-control" value={formData.filler.fullLegalName} onChange={fillFormData('filler.fullLegalName')} />
                            </div>

                            <div className="data-input">
                                <div className="label"><strong>I live in</strong> (municipality & province)</div>
                                <input type="text" className="form-control" value={formData.filler.province} onChange={fillFormData('filler.province')} />
                            </div>

                            <p className="paragrap">
                                <strong>and I swear/affirm that the following is true:</strong>
                            </p>

                            <p className="sub-heading">Part 1: Income</p>
                        </li>

                        {/* Income */}
                        <li>
                            <p className="paragrap">
                                I am currently
                            </p>

                            <div className="row gap-4 pb-10px">
                                <div className="d-flex flex-row">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="employment" value="employed_by" id="employed_by"
                                            checked={formData.income.employmentStatus === 'employed_by'}
                                            onChange={fillFormData('income.employmentStatus')}
                                        />
                                        <label className="form-check-label text-nowrap" htmlFor="employed_by">
                                            employed by (name and address of employer)
                                        </label>
                                    </div>
                                    <div className="data-input w-100">
                                        <input type="text" className="form-control" value={formData.income.employer}
                                            onChange={fillFormData('income.employer')} />
                                    </div>
                                </div>

                                <div className="d-flex flex-row">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="employment" value="self_employed" id="self_employed"
                                            checked={formData.income.employmentStatus === 'self_employed'}
                                            onChange={fillFormData('income.employmentStatus')}
                                        />
                                        <label className="form-check-label text-nowrap" htmlFor="self_employed">
                                            self-employed, carrying on business under the name of (name and address of business)
                                        </label>
                                    </div>
                                    <div className="data-input w-100">
                                        <input type="text" className="form-control" value={formData.income.business}
                                            onChange={fillFormData('income.business')} />
                                    </div>
                                </div>

                                <div className="d-flex flex-row">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="employment" value="unemployed" id="unemployed"
                                            checked={formData.income.employmentStatus === 'unemployed'}
                                            onChange={fillFormData('income.employmentStatus')}
                                        />
                                        <label className="form-check-label text-nowrap" htmlFor="unemployed">
                                            unemployed since (date when last employed)
                                        </label>
                                    </div>
                                    <div className="data-input w-100">
                                        <input type="text" className="form-control" value={formData.income.unemployedDate}
                                            onChange={fillFormData('income.unemployedDate')} />
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li>
                            <p className="paragrap">
                                I attach proof of my year-to-date income from all sources, including my most recent (attach all that are applicable):
                            </p>

                            <div className="row gap-4 pb-10px">
                                <div className="d-flex flex-row flex-wrap gap-4 pb-10px">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" name="attachements[]" value="pay_cheque_stub" id="pay_cheque_stub"
                                            checked={formData.income.attachments.payChequeStub === true}
                                            onChange={changeFormCheck('income.attachments.payChequeStub')}
                                        />
                                        <label className="form-check-label" htmlFor="pay_cheque_stub">
                                            pay cheque stub
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" name="attachements[]" value="social_assistance_stub" id="social_assistance_stub"
                                            checked={formData.income.attachments.socialAssistanceStub === true}
                                            onChange={changeFormCheck('income.attachments.socialAssistanceStub')}
                                        />
                                        <label className="form-check-label" htmlFor="social_assistance_stub">
                                            social assistance stub
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" name="attachements[]" value="pension_stub" id="pension_stub"
                                            checked={formData.income.attachments.pensionStub === true}
                                            onChange={changeFormCheck('income.attachments.pensionStub')}
                                        />
                                        <label className="form-check-label" htmlFor="pension_stub">
                                            pension stub
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" name="attachements[]" value="workers_compensation_stub" id="workers_compensation_stub"
                                            checked={formData.income.attachments.workersCompensationStub === true}
                                            onChange={changeFormCheck('income.attachments.workersCompensationStub')}
                                        />
                                        <label className="form-check-label" htmlFor="workers_compensation_stub">
                                            workers' compensation stub
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" name="attachements[]" value="employment_insurance_stub" id="employment_insurance_stub"
                                            checked={formData.income.attachments.employmentInsuranceStub === true}
                                            onChange={changeFormCheck('income.attachments.employmentInsuranceStub')}
                                        />
                                        <label className="form-check-label" htmlFor="employment_insurance_stub">
                                            employment insurance stub and last Record of Employment
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" name="attachements[]" value="statement_of_income" id="statement_of_income"
                                            checked={formData.income.attachments.statementOfIncome === true}
                                            onChange={changeFormCheck('income.attachments.statementOfIncome')}
                                        />
                                        <label className="form-check-label" htmlFor="statement_of_income">
                                            statement of income and expenses/ professional activities (for self-employed individuals)
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" name="attachements[]" value="other" id="other"
                                            checked={formData.income.attachments.other === true}
                                            onChange={changeFormCheck('income.attachments.other')}
                                        />
                                        <label className="form-check-label" htmlFor="other">
                                            other (e.g. a letter from your employer confirming all income received to date this year)
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="data-input">
                                <div className="label">Last year, my gross income from all sources was $</div>
                                <input type="text" className="form-control" value={formData.income.lastYearGrossIncome}
                                    onChange={fillFormData('income.lastYearGrossIncome')} />
                                <p className="paragraph w-100">(do not suibsract any taxes that have been deducted from this income).</p>
                            </div>
                        </li>

                        <li>
                            <div className="row gap-4 pb-10px">
                                <div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="attachementsAcknowledgment" value="yes" id="attaching"
                                            checked={formData.income.attachementsAcknowledgment === 'yes'}
                                            onChange={fillFormData('income.attachementsAcknowledgment')} />
                                        <label className="form-check-label" htmlFor="attaching">
                                            I am attaching all of the following required documents to this financial statement as proof of my income over the past three years, if they have not already been provided:
                                        </label>
                                        <ul>
                                            <li>a copy of my personal income tax returns for each of the past three taxation years, including any materials that were filed with the returns. (Income tax returns must be served but should NOT be filed in the continuing record, unless they are filed with a motion to refrain a driver's license suspension.)</li>
                                            <li>a copy of my notices of assessment and any notices of reassessment for each of the past three taxation years</li>
                                            <li>where my notices of assessment and reassessment are unavailable for any of the past three taxation years or where I have not filed a retum for any of the past three taxation years, an Income and Deductions printout from the Canada Revenue Agency for each of those years, whether or not I filed an income tax retum.
                                                <br /><i>Note: An Income and Deductions printout is available from Canada Revenue Agency. Please call customer service at 1-800-959-8281.</i>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="fw-bold">OR</div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="attachementsAcknowledgment" value="indian" id="indian"
                                            checked={formData.income.attachementsAcknowledgment === 'indian'}
                                            onChange={fillFormData('income.attachementsAcknowledgment')} />
                                        <label className="form-check-label" htmlFor="indian">
                                            I am an Indian within the meaning of the Indian Act (Canada) and I have chosen not to file income tax returns for the past three years. I am attaching the following proof of income for the last three years (list documents you have provided):
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ol>
                </div>

                {/* Tables */}
                <div className="row pb-20px pl-40px">

                    {/* Table 1 */}
                    <p className="paragraph fst-italic">(In this table you must show all of the income that you are
                        currently receiving whether taxable or not.)</p>
                    <table className='pb-40px form-131-income border-1 border-dark'>
                        <thead>
                            <tr>
                                <th className='text-center border-1 border-dark'>Income Source</th>
                                <th className='border-1 border-dark'>Amount Received/Month ($)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='border-1 border-dark' >
                                    <span className="number">1.</span>
                                    <span className="paragraph">Employment income (before deductions)</span>
                                </td>
                                <td className='border-1 border-dark' ><input className="form-control" value={formData.income.sources.employmentIncome}
                                    onChange={fillFormData('income.sources.employmentIncome')} /></td>
                            </tr>
                            <tr>
                                <td className='border-1 border-dark' >
                                    <span className="number">2.</span>
                                    <span className="paragraph">Commission, tips and bonuses</span>
                                </td>
                                <td className='border-1 border-dark' ><input className="form-control" value={formData.income.sources.commissionTipsBonuses}
                                    onChange={fillFormData('income.sources.commissionTipsBonuses')} /></td>
                            </tr>
                            <tr>
                                <td className='border-1 border-dark'>
                                    <span className="number">3.</span>
                                    <span
                                        className="paragraph">Self-employment income (Monthly amount before expenses: $)</span>
                                </td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.income.sources.selfEmploymentIncome}
                                    onChange={fillFormData('income.sources.selfEmploymentIncome')} /></td>
                            </tr>
                            <tr>
                                <td className='border-1 border-dark'>
                                    <span className="number">4.</span>
                                    <span className="paragraph">Employment Insurance benefits</span>
                                </td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.income.sources.employmentInsuranceBenefits}
                                    onChange={fillFormData('income.sources.employmentInsuranceBenefits')} /></td>
                            </tr>
                            <tr>
                                <td className='border-1 border-dark'>
                                    <span className="number">5.</span>
                                    <span className="paragraph">Workers' compensation benefits</span>
                                </td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.income.sources.workersCompensationBenefits}
                                    onChange={fillFormData('income.sources.workersCompensationBenefits')} /></td>
                            </tr>
                            <tr>
                                <td className='border-1 border-dark'>
                                    <span className="number">6.</span>
                                    <span className="paragraph">Social assistance income (including ODSP payments)</span>
                                </td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.income.sources.socialAssistanceIncome}
                                    onChange={fillFormData('income.sources.socialAssistanceIncome')} /></td>
                            </tr>
                            <tr>
                                <td className='border-1 border-dark'>
                                    <span className="number">7.</span>
                                    <span className="paragraph">Interest and investment income</span>
                                </td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.income.sources.interestInvestmentIncome}
                                    onChange={fillFormData('income.sources.interestInvestmentIncome')} /></td>
                            </tr>
                            <tr>
                                <td className='border-1 border-dark'>
                                    <span className="number">8.</span>
                                    <span className="paragraph">Pension income (including CPP and OAS)</span>
                                </td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.income.sources.pensionIncome}
                                    onChange={fillFormData('income.sources.pensionIncome')} /></td>
                            </tr>
                            <tr>
                                <td className='border-1 border-dark'>
                                    <span className="number">9.</span>
                                    <span className="paragraph">Spousal support received from a former spouse/partner</span>
                                </td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.income.sources.spousalSupport}
                                    onChange={fillFormData('income.sources.spousalSupport')} /></td>
                            </tr>
                            <tr>
                                <td className='border-1 border-dark'>
                                    <span className="number">10.</span>
                                    <span className="paragraph">Child Tax Benefits or Tax Rebates (e.g. GST)</span>
                                </td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.income.sources.childTaxBenefits}
                                    onChange={fillFormData('income.sources.childTaxBenefits')} /></td>
                            </tr>
                            <tr>
                                <td className='border-1 border-dark'>
                                    <span className="number">11.</span>
                                    <span className="paragraph">Other sources of income (e.g. RRSP withdrawals, capital gains)
                                        <i>(*attach Schedule A and divide annual amount by 12)</i>
                                    </span>
                                </td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.income.sources.otherIncome}
                                    onChange={fillFormData('income.sources.otherIncome')} /></td>
                            </tr>
                            <tr>
                                <td className='border-1 border-dark'>
                                    <span className="number">12.</span>
                                    <span className="paragraph fw-bold">Total monthly income from all sources:</span>
                                </td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.income.sources.totalMonthlyIncome}
                                    onChange={fillFormData('income.sources.totalMonthlyIncome')} /></td>
                            </tr>
                            <tr>
                                <td className='border-1 border-dark'>
                                    <span className="number">13.</span>
                                    <span className="paragraph fw-bold">Total monthly income X 12 = Total annual income:</span>
                                </td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.income.sources.totalAnnualIncome}
                                    onChange={fillFormData('income.sources.totalAnnualIncome')} /></td>
                            </tr>
                        </tbody>
                    </table>

                    {/* Table 1 inner Table */}
                    <p className="paragraph fw-bold">14. Other Benefits</p>
                    <p className="paragraph">Provide details of any non-cash benefits that employer provides to you or are
                        paid for by your business such as medical insurance coverage, the use of a company car, or romm and
                        board.</p>
                    <table className='pb-40px form-131-income-inner'>
                        <thead>
                            <tr>
                                <th className='text-center border-1 border-dark'>Item</th>
                                <th className='text-center border-1 border-dark'>Details</th>
                                <th className='text-center border-1 border-dark'>Yearly Market Values ($)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.income.otherBenefits.b1.item}
                                    onChange={fillFormData('income.otherBenefits.b1.item')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.income.otherBenefits.b1.details}
                                    onChange={fillFormData('income.otherBenefits.b1.details')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.income.otherBenefits.b1.yearlyMarketValues}
                                    onChange={fillFormData('income.otherBenefits.b1.yearlyMarketValues')} /></td>
                            </tr>
                            <tr>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.income.otherBenefits.b2.item}
                                    onChange={fillFormData('income.otherBenefits.b2.item')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.income.otherBenefits.b2.details}
                                    onChange={fillFormData('income.otherBenefits.b2.details')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.income.otherBenefits.b2.yearlyMarketValues}
                                    onChange={fillFormData('income.otherBenefits.b2.yearlyMarketValues')} /></td>
                            </tr>
                            <tr>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.income.otherBenefits.b3.item}
                                    onChange={fillFormData('income.otherBenefits.b3.item')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.income.otherBenefits.b3.details}
                                    onChange={fillFormData('income.otherBenefits.b3.details')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.income.otherBenefits.b3.yearlyMarketValues}
                                    onChange={fillFormData('income.otherBenefits.b3.yearlyMarketValues')} /></td>
                            </tr>
                            <tr>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.income.otherBenefits.b4.item}
                                    onChange={fillFormData('income.otherBenefits.b4.item')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.income.otherBenefits.b4.details}
                                    onChange={fillFormData('income.otherBenefits.b4.details')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.income.otherBenefits.b4.yearlyMarketValues}
                                    onChange={fillFormData('income.otherBenefits.b4.yearlyMarketValues')} /></td>
                            </tr>
                        </tbody>
                    </table>

                    <p className="sub-heading">Part 2: Expenses</p>

                    {/* Table Expenses */}
                    <div className="row">

                        {/* Left Tables */}
                        <div className="col-6">
                            <table className='pb-40px form-131-expenses'>
                                <thead>
                                    <tr>
                                        <th className='text-center border-1 border-dark'>Expense</th>
                                        <th className='border-1 border-dark'>Monthly Amount ($)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th className='sub-table-heading-3' colSpan={2}>Automatic Deductions</th>
                                    </tr>
                                    <tr>
                                        <td className='border-1 border-dark'>CPP contributions</td>
                                        <td className='border-1 border-dark'><input className="form-control"
                                            value={formData.expenses.automaticDeductions.cppContributions}
                                            onChange={fillFormData('expenses.automaticDeductions.cppContributions')} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='border-1 border-dark'>EI premiums</td>
                                        <td className='border-1 border-dark'><input className="form-control"
                                            value={formData.expenses.automaticDeductions.eiPremiums}
                                            onChange={fillFormData('expenses.automaticDeductions.eiPremiums')} /></td>
                                    </tr>
                                    <tr>
                                        <td className='border-1 border-dark'>Income taxes</td>
                                        <td className='border-1 border-dark'><input className="form-control"
                                            value={formData.expenses.automaticDeductions.incomeTaxes}
                                            onChange={fillFormData('expenses.automaticDeductions.incomeTaxes')} /></td>
                                    </tr>
                                    <tr>
                                        <td className='border-1 border-dark'>Employee pension contributions</td>
                                        <td className='border-1 border-dark'><input className="form-control"
                                            value={formData.expenses.automaticDeductions.employeePensionContributions}
                                            onChange={fillFormData('expenses.automaticDeductions.employeePensionContributions')} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='border-1 border-dark'>Union dues</td>
                                        <td className='border-1 border-dark'><input className="form-control"
                                            value={formData.expenses.automaticDeductions.unionDues}
                                            onChange={fillFormData('expenses.automaticDeductions.unionDues')} /></td>
                                    </tr>
                                    <tr>
                                        <td className='fw-bold border-1 border-dark'>SUBTOTAL</td>
                                        <td className='border-1 border-dark'><input className="form-control"
                                            value={formData.expenses.automaticDeductions.subtotal}
                                            onChange={fillFormData('expenses.automaticDeductions.subtotal')} /></td>
                                    </tr>

                                    <tr>
                                        <th className='sub-table-heading-3' colSpan={2}>Housing</th>
                                    </tr>
                                    <tr>
                                        <td className='border-1 border-dark'>Rent or mortgage</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.housing.rentOrMortgage}
                                            onChange={fillFormData('expenses.housing.rentOrMortgage')} /></td>
                                    </tr>
                                    <tr>
                                        <td className='border-1 border-dark'>Property taxes</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.housing.propertyTaxes}
                                            onChange={fillFormData('expenses.housing.propertyTaxes')} /></td>
                                    </tr>
                                    <tr>
                                        <td className='border-1 border-dark'>Property insurance</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.housing.propertyInsurance}
                                            onChange={fillFormData('expenses.housing.propertyInsurance')} /></td>
                                    </tr>
                                    <tr>
                                        <td className='border-1 border-dark'>Condominium fees</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.housing.condominiumFees}
                                            onChange={fillFormData('expenses.housing.condominiumFees')} /></td>
                                    </tr>
                                    <tr>
                                        <td className='border-1 border-dark'>Repairs and maintenance</td>
                                        <td className='border-1 border-dark'><input className="form-control"
                                            value={formData.expenses.housing.repairsAndMaintenance}
                                            onChange={fillFormData('expenses.housing.repairsAndMaintenance')} /></td>
                                    </tr>
                                    <tr>
                                        <td className='fw-bold border-1 border-dark'>SUBTOTAL</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.housing.subtotal}
                                            onChange={fillFormData('expenses.housing.subtotal')} /></td>
                                    </tr>

                                    <tr>
                                        <th className='sub-table-heading-3' colSpan={2}>Utilities</th>
                                    </tr>
                                    <tr>
                                        <td className='border-1 border-dark'>Water</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.utilities.water}
                                            onChange={fillFormData('expenses.utilities.water')} /></td>
                                    </tr>
                                    <tr>
                                        <td className='border-1 border-dark'>Heat</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.utilities.heat}
                                            onChange={fillFormData('expenses.utilities.heat')} /></td>
                                    </tr>
                                    <tr>
                                        <td className='border-1 border-dark'>Electricity</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.utilities.electricity}
                                            onChange={fillFormData('expenses.utilities.electricity')} /></td>
                                    </tr>
                                    <tr>
                                        <td className='border-1 border-dark'>Telephone</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.utilities.telephone}
                                            onChange={fillFormData('expenses.utilities.telephone')} /></td>
                                    </tr>
                                    <tr>
                                        <td className='border-1 border-dark'>Cell Phone</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.utilities.cellPhone}
                                            onChange={fillFormData('expenses.utilities.cellPhone')} /></td>
                                    </tr>
                                    <tr>
                                        <td className='border-1 border-dark'>Cable</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.utilities.cable}
                                            onChange={fillFormData('expenses.utilities.cable')} /></td>
                                    </tr>
                                    <tr>
                                        <td className='border-1 border-dark'>Internet</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.utilities.internet}
                                            onChange={fillFormData('expenses.utilities.internet')} /></td>
                                    </tr>
                                    <tr>
                                        <td className='fw-bold border-1 border-dark'>SUBTOTAL</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.utilities.subtotal}
                                            onChange={fillFormData('expenses.utilities.subtotal')} /></td>
                                    </tr>

                                    <tr>
                                        <th className='sub-table-heading-3' colSpan={2}>Household Expenses</th>
                                    </tr>
                                    <tr>
                                        <td className='border-1 border-dark'>Groceries</td>
                                        <td className='border-1 border-dark'><input className="form-control"
                                            value={formData.expenses.householdExpenses.groceries}
                                            onChange={fillFormData('expenses.householdExpenses.groceries')} /></td>
                                    </tr>
                                    <tr>
                                        <td className='border-1 border-dark'>Household supplies</td>
                                        <td className='border-1 border-dark'><input className="form-control"
                                            value={formData.expenses.householdExpenses.householdSupplies}
                                            onChange={fillFormData('expenses.householdExpenses.householdSupplies')} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='border-1 border-dark'>Meals outside the home</td>
                                        <td className='border-1 border-dark'><input className="form-control"
                                            value={formData.expenses.householdExpenses.mealsOutsideTheHome}
                                            onChange={fillFormData('expenses.householdExpenses.mealsOutsideTheHome')} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='border-1 border-dark'>Pet care</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.householdExpenses.petCare}
                                            onChange={fillFormData('expenses.householdExpenses.petCare')} /></td>
                                    </tr>
                                    <tr>
                                        <td className='border-1 border-dark'>Laundry and Dry Cleaning</td>
                                        <td className='border-1 border-dark'><input className="form-control"
                                            value={formData.expenses.householdExpenses.laundryAndDryCleaning}
                                            onChange={fillFormData('expenses.householdExpenses.laundryAndDryCleaning')} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='fw-bold border-1 border-dark'>SUBTOTAL</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.householdExpenses.subtotal}
                                            onChange={fillFormData('expenses.householdExpenses.subtotal')} /></td>
                                    </tr>

                                    <tr>
                                        <th className='sub-table-heading-3' colSpan={2}>Childcare Costs</th>
                                    </tr>
                                    <tr>
                                        <td className='border-1 border-dark'>Daycare expenses</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.childcare.daycare}
                                            onChange={fillFormData('expenses.childcare.daycare')} /></td>
                                    </tr>
                                    <tr>
                                        <td className='border-1 border-dark'>Babysitting costs</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.childcare.babysitting}
                                            onChange={fillFormData('expenses.childcare.babysitting')} /></td>
                                    </tr>
                                    <tr>
                                        <td className='fw-bold border-1 border-dark'>SUBTOTAL</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.childcare.subtotal}
                                            onChange={fillFormData('expenses.childcare.subtotal')} /></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Right Tables */}
                        <div className="col-6">
                            <table className='pb-40px form-131-expenses'>
                                <thead>
                                    <tr>
                                        <th className='text-center border-1 border-dark'>Expense</th>
                                        <th className='border-1 border-dark'>Monthly Amount ($)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th className='sub-table-heading-3' colSpan={2}>Transportaion</th>
                                    </tr>
                                    <tr>
                                        <td className='border-1 border-dark'>Public transit, taxis</td>
                                        <td className='border-1 border-dark'><input className="form-control"
                                            value={formData.expenses.transportation.publicTransit}
                                            onChange={fillFormData('expenses.transportation.publicTransit')} /></td>
                                    </tr>
                                    <tr>
                                        <td className='border-1 border-dark'>Gas and oil</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.transportation.gasAndOil}
                                            onChange={fillFormData('expenses.transportation.gasAndOil')} /></td>
                                    </tr>
                                    <tr>
                                        <td className='border-1 border-dark'>Car insurance and licence</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.transportation.insurance}
                                            onChange={fillFormData('expenses.transportation.insurance')} /></td>
                                    </tr>
                                    <tr>
                                        <td className='border-1 border-dark'>Repairs and maintenance</td>
                                        <td className='border-1 border-dark'><input className="form-control"
                                            value={formData.expenses.transportation.repairsAndMaintenance}
                                            onChange={fillFormData('expenses.transportation.repairsAndMaintenance')} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='border-1 border-dark'>Parking</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.transportation.parking}
                                            onChange={fillFormData('expenses.transportation.parking')} /></td>
                                    </tr>
                                    <tr>
                                        <td className='border-1 border-dark'>Car Loan or Lease Payments</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.transportation.carPayments}
                                            onChange={fillFormData('expenses.transportation.carPayments')} /></td>
                                    </tr>
                                    <tr>
                                        <td className='fw-bold border-1 border-dark'>SUBTOTAL</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.transportation.subtotal}
                                            onChange={fillFormData('expenses.transportation.subtotal')} /></td>
                                    </tr>

                                    <tr>
                                        <th className='sub-table-heading-3' colSpan={2}>Health</th>
                                    </tr>
                                    <tr>
                                        <td className='border-1 border-dark'>Health insurance premiums</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.health.insurance}
                                            onChange={fillFormData('expenses.health.insurance')} /></td>
                                    </tr>
                                    <tr>
                                        <td className='border-1 border-dark'>Dental expenses</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.health.dental}
                                            onChange={fillFormData('expenses.health.dental')} /></td>
                                    </tr>
                                    <tr>
                                        <td className='border-1 border-dark'>Medicine and drugs</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.health.medicine}
                                            onChange={fillFormData('expenses.health.medicine')} /></td>
                                    </tr>
                                    <tr>
                                        <td className='border-1 border-dark'>Eye care</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.health.eyecare}
                                            onChange={fillFormData('expenses.health.eyecare')} /></td>
                                    </tr>
                                    <tr>
                                        <td className='fw-bold border-1 border-dark'>SUBTOTAL</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.health.subtotal}
                                            onChange={fillFormData('expenses.health.subtotal')} /></td>
                                    </tr>

                                    <tr>
                                        <th className='sub-table-heading-3' colSpan={2}>Personal</th>
                                    </tr>
                                    <tr>
                                        <td className='border-1 border-dark'>Clothing</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.personal.clothing}
                                            onChange={fillFormData('expenses.personal.clothing')} /></td>
                                    </tr>
                                    <tr>
                                        <td className='border-1 border-dark'>Hair care and beauty</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.personal.haircare}
                                            onChange={fillFormData('expenses.personal.haircare')} /></td>
                                    </tr>
                                    <tr>
                                        <td className='border-1 border-dark'>Alcohol and tobacco</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.personal.alcohol}
                                            onChange={fillFormData('expenses.personal.alcohol')} /></td>
                                    </tr>
                                    <tr>
                                        <td className='border-1 border-dark'>Education (specify)</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.personal.education}
                                            onChange={fillFormData('expenses.personal.education')} /></td>
                                    </tr>
                                    <tr>
                                        <td className='border-1 border-dark'>Entertainment/recreation (including children)</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.personal.entertainment}
                                            onChange={fillFormData('expenses.personal.entertainment')} /></td>
                                    </tr>
                                    <tr>
                                        <td className='border-1 border-dark'>Gifts</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.personal.gifts}
                                            onChange={fillFormData('expenses.personal.gifts')} /></td>
                                    </tr>
                                    <tr>
                                        <td className='fw-bold border-1 border-dark'>SUBTOTAL</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.personal.subtotal}
                                            onChange={fillFormData('expenses.personal.subtotal')} /></td>
                                    </tr>

                                    <tr>
                                        <th className='sub-table-heading-3' colSpan={2}>Other Expenses</th>
                                    </tr>
                                    <tr>
                                        <td className='border-1 border-dark'>Life Insurance premiums</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.other.lifeInsurance}
                                            onChange={fillFormData('expenses.other.lifeInsurance')} /></td>
                                    </tr>
                                    <tr>
                                        <td className='border-1 border-dark'>RRSP/RESP withdrawals</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.other.rrsp}
                                            onChange={fillFormData('expenses.other.rrsp')} /></td>
                                    </tr>
                                    <tr>
                                        <td className='border-1 border-dark'>Vacations</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.other.vacations}
                                            onChange={fillFormData('expenses.other.vacations')} /></td>
                                    </tr>
                                    <tr>
                                        <td className='border-1 border-dark'>School fees and supplies</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.other.school}
                                            onChange={fillFormData('expenses.other.school')} /></td>
                                    </tr>
                                    <tr>
                                        <td className='border-1 border-dark'>Clothing for children</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.other.clothingForChildren}
                                            onChange={fillFormData('expenses.other.clothingForChildren')} /></td>
                                    </tr>
                                    <tr>
                                        <td className='border-1 border-dark'>Children's activities</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.other.childrenActivities}
                                            onChange={fillFormData('expenses.other.childrenActivities')} /></td>
                                    </tr>
                                    <tr>
                                        <td className='border-1 border-dark'>Summer camp expenses</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.other.summerCamp}
                                            onChange={fillFormData('expenses.other.summerCamp')} /></td>
                                    </tr>
                                    <tr>
                                        <td className='border-1 border-dark'>Debt payments</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.other.debtPayments}
                                            onChange={fillFormData('expenses.other.debtPayments')} /></td>
                                    </tr>
                                    <tr>
                                        <td className='border-1 border-dark'>Support paid for other children</td>
                                        <td className='border-1 border-dark'><input className="form-control"
                                            value={formData.expenses.other.supportPaidForOtherChildren}
                                            onChange={fillFormData('expenses.other.supportPaidForOtherChildren')} /></td>
                                    </tr>
                                    <tr>
                                        <td className='border-1 border-dark'>Other expenses not shown above (specify)</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.other.other}
                                            onChange={fillFormData('expenses.other.other')} /></td>
                                    </tr>
                                    <tr>
                                        <td className='fw-bold border-1 border-dark'>SUBTOTAL</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.other.subtotal}
                                            onChange={fillFormData('expenses.other.subtotal')} /></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Totals of Expenses */}
                    <div className="row justify-content-end">
                        {/* Right Tables */}
                        <div className="col-8">
                            <table className='pb-40px form-131-expenses'>
                                <tbody>
                                    <tr>
                                        <td className='fw-bold border-1 border-dark'>Total Amount of Monthly Expenses ($)</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.totalMonthlyExpenses}
                                            onChange={fillFormData('expenses.totalMonthlyExpenses')} /></td>
                                    </tr>
                                    <tr>
                                        <td className='fw-bold border-1 border-dark'>Total Amount of Yearly Expenses ($)</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.totalYearlyExpenses}
                                            onChange={fillFormData('expenses.totalYearlyExpenses')} /></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Other Income Earners */}
                <div className="row pb-20px pl-40px">
                    <p className="sub-heading">Part 3: OTHER INCOME EARNERS IN THE HOME</p>

                    <p className="paragraph fst-italic">Complete this part only if you are making or responding to a claim
                        for undue hardship or spousal support. Check and complete all sections that apply to you
                        circumstances.</p>

                    <ol>
                        <li>
                            <div className="d-flex flex-row">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" name="living_status_alone"
                                        value="alone" id="alone"
                                        checked={formData.otherIncomeEarners.liveAlone === true}
                                        onChange={changeFormCheck('otherIncomeEarners.liveAlone')}
                                    />
                                    <label className="form-check-label text-nowrap" htmlFor="alone">
                                        I live alone.
                                    </label>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="d-flex flex-row">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" name="living_status_partner"
                                        value="partner" id="partner"
                                        checked={formData.otherIncomeEarners.isLivingWith === true}
                                        onChange={changeFormCheck('otherIncomeEarners.isLivingWith')}
                                    />
                                    <label className="form-check-label text-nowrap" htmlFor="partner">
                                        I am living with (full legal name of person you are married to or cohabiting with)
                                    </label>
                                </div>
                                <div className="data-input w-100">
                                    <input type="text" className="form-control" value={formData.otherIncomeEarners.livingWith}
                                        onChange={fillFormData('otherIncomeEarners.livingWith')} />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="d-flex flex-row">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" name="living_status_children"
                                        value="children" id="children"
                                        checked={formData.otherIncomeEarners.isAdults === true}
                                        onChange={changeFormCheck('otherIncomeEarners.isAdults')}
                                    />
                                    <label className="form-check-label text-nowrap" htmlFor="children">
                                        I/we live with the following other adults(s):
                                    </label>
                                </div>
                                <div className="data-input w-100">
                                    <input type="text" className="form-control" value={formData.otherIncomeEarners.adults}
                                        onChange={fillFormData('otherIncomeEarners.adults')} />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="d-flex flex-row">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" name="living_status_no_of_children"
                                        value="no_of_children" id="no_of_children"
                                        checked={formData.otherIncomeEarners.isChildren === true}
                                        onChange={changeFormCheck('otherIncomeEarners.isChildren')}
                                    />
                                    <label className="form-check-label text-nowrap" htmlFor="no_of_children">
                                        I/we have (give number)
                                    </label>
                                </div>
                                <div className="data-input">
                                    <input type="text" className="form-control" value={formData.otherIncomeEarners.children}
                                        onChange={fillFormData('otherIncomeEarners.children')} />
                                </div>
                                <span className="paragraph mb-0">child(ren) who live(s) in the home.</span>
                            </div>
                        </li>
                        <li>
                            <p className="paragraph">My spouse/partner</p>
                            <div className="pl-40px">
                                <div className="d-flex flex-row">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="partner_works" value="yes"
                                            id="partner_works"
                                            checked={formData.otherIncomeEarners.partner.isWorks === 'yes'}
                                            onChange={fillFormData('otherIncomeEarners.partner.isWorks')}
                                        />
                                        <label className="form-check-label text-nowrap" htmlFor="partner_works">
                                            works at (place of work or business)
                                        </label>
                                    </div>
                                    <div className="data-input">
                                        <input type="text" className="form-control"
                                            value={formData.otherIncomeEarners.partner.worksAt}
                                            onChange={fillFormData('otherIncomeEarners.partner.worksAt')} />
                                    </div>
                                </div>
                                <div className="d-flex flex-row">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="partner_works" value="no"
                                            id="partner_not_works"
                                            checked={formData.otherIncomeEarners.partner.isWorks === 'no'}
                                            onChange={fillFormData('otherIncomeEarners.partner.isWorks')}
                                        />
                                        <label className="form-check-label text-nowrap" htmlFor="partner_not_works">
                                            does not work outside the home.
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <p className="paragraph">My spouse/partner</p>
                            <div className="pl-40px">
                                <div className="d-flex flex-row">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="partner_earns" value="yes"
                                            id="partner_earns"
                                            checked={formData.otherIncomeEarners.partner.isEarns === 'yes'}
                                            onChange={fillFormData('otherIncomeEarners.partner.isEarns')}
                                        />
                                        <label className="form-check-label text-nowrap" htmlFor="partner_earns">
                                            earns (give amount) $
                                        </label>
                                    </div>
                                    <div className="data-input">
                                        <input type="text" className="form-control" value={formData.otherIncomeEarners.partner.earns}
                                            onChange={fillFormData('otherIncomeEarners.partner.earns')} />
                                    </div>
                                    <span className="paraphaph mb-0">per</span>
                                    <div className="data-input">
                                        <input type="text" className="form-control"
                                            value={formData.otherIncomeEarners.partner.earnsPer}
                                            onChange={fillFormData('otherIncomeEarners.partner.earnsPer')} />
                                    </div>
                                </div>
                                <div className="d-flex flex-row">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="partner_earns" value="no"
                                            id="partner_not_earns"
                                            checked={formData.otherIncomeEarners.partner.isEarns === 'no'}
                                            onChange={fillFormData('otherIncomeEarners.partner.isEarns')}
                                        />
                                        <label className="form-check-label text-nowrap" htmlFor="partner_not_earns">
                                            does not earn any income.
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="pl-40px">
                                <div className="d-flex flex-row">
                                    <span className="paragraph mb-0">My spouse/partner or other adult residing in the home contributions about $</span>
                                    <div className="data-input">
                                        <input type="text" className="form-control"
                                            value={formData.otherIncomeEarners.partner.contributions}
                                            onChange={fillFormData('otherIncomeEarners.partner.contributions')} />
                                    </div>
                                    <span className="parapraph mb-0">per</span>
                                    <div className="data-input">
                                        <input type="text" className="form-control"
                                            value={formData.otherIncomeEarners.partner.contributionsPer}
                                            onChange={fillFormData('otherIncomeEarners.partner.contributionsPer')} />
                                    </div>
                                </div>
                                <p className="paragraph">towards the household expenses.</p>
                            </div>
                        </li>
                    </ol>

                </div>

                {/* Assets in and out */}
                <div className="row pb-20px pl-40px">
                    <p className="sub-heading">Part 3: ASSETS IN AND OUT OF ONTARIO</p>

                    <p className="paragraph fst-italic">If any sections of Parts 4 to 9 do not apply, do not leave blank,
                        print "NONE" in the section.</p>

                    <div className="data-input">
                        <div className="date">The date of marriage is: (give date)</div>
                        <input type="text" className="form-control" value={formData.assets.dateOfMarriage}
                            onChange={fillFormData('assets.dateOfMarriage')} />
                    </div>

                    <div className="data-input">
                        <div className="date">The valuation date is: (give date)</div>
                        <input type="text" className="form-control" value={formData.assets.dateOfValuation}
                            onChange={fillFormData('assets.dateOfValuation')} />
                    </div>

                    <div className="data-input">
                        <div className="label">The date of commencment of cohabitation is (if different from date of
                            marriage): (give date)
                        </div>
                        <input type="date" className="form-control" value={formData.assets.dateOfCommencement}
                            onChange={fillFormData('assets.dateOfCommencement')} />
                    </div>
                </div>

                {/* 4(a) Land */}
                <div className="row pb-20px pl-40px mt-3">
                    <p className="sub-heading">Part 4(a): LAND</p>

                    <p className="paragraph fst-italic">﻿Include any interest in land owned on the dates in each of the
                        columns below, including leasehold interests and mortgages. Show estimated market value of your
                        interest, but do not deduct encumbrances or costs of disposition; these encumbrances and costs
                        should be shown under Part 5, "Debts and Other Liabilities".</p>

                    {/* Table */}
                    <table className='pb-40px form-131-4a border-1 border-dark '>
                        <thead>
                            <tr>
                                <th className='border-1 border-dark' rowSpan={2}>Nature & Type of Ownership <small>(Give your percentage interest where
                                    relevant.)</small></th>
                                <th className='border-1 border-dark' rowSpan={2}>Address of Property</th>
                                <th className='border-1 border-dark' colSpan={3}>Estimated Market Value of YOUR Interest ($)</th>
                            </tr>
                            <tr>
                                <th className='border-1 border-dark'>on date of marriage</th>
                                <th className='border-1 border-dark'>on valuation date</th>
                                <th className='border-1 border-dark'>today</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='inputs'>
                                <td className='border-1 border-dark'><textarea className="form-control" value={formData.assets.land.ownership}
                                    onChange={fillFormData('assets.land.ownership')} /></td>
                                <td className='border-1 border-dark'><textarea className="form-control" value={formData.assets.land.address}
                                    onChange={fillFormData('assets.land.address')} /></td>
                                <td className='border-1 border-dark'><textarea className="form-control" value={formData.assets.land.onDateOfMarriage}
                                    onChange={fillFormData('assets.land.onDateOfMarriage')} /></td>
                                <td className='border-1 border-dark'><textarea className="form-control" value={formData.assets.land.onValuationDate}
                                    onChange={fillFormData('assets.land.onValuationDate')} /></td>
                                <td className='border-1 border-dark'><textarea className="form-control" value={formData.assets.land.today}
                                    onChange={fillFormData('assets.land.today')} /></td>
                            </tr>
                            <tr className='results'>
                                <td colSpan={3} className="paragraph fw-bold text-end border-1 border-dark"> 15. TOTAL VALUE OF LAND</td>
                                <td className='border-1 border-dark'><input className="form-control text-end" value={formData.assets.land.total1}
                                    onChange={fillFormData('assets.land.total1')} /></td>
                                <td className='border-1 border-dark'><input className="form-control text-end" value={formData.assets.land.total2}
                                    onChange={fillFormData('assets.land.total2')} /></td>
                            </tr>
                        </tbody>
                    </table>

                </div>

                {/* 4(b) General Household Items and Vehicles */}
                <div className="row pb-20px pl-40px">
                    <p className="sub-heading">Part 4(b): GENERAL HOUSEHOLD ITEMS AND VEHICLES</p>

                    <p className="paragraph fst-italic">Show estiamted market value, not the cost of replacement for these
                        items owned on the dates in each of the columns below. Do not deduct encumbrances or costs of
                        disposition; these encumbrances and costs should be shown under Part 5, "Debts and Other
                        Liablilities"</p>

                    {/* Table */}
                    <table className='pb-40px form-131-4b border-1 border-dark'>
                        <thead>
                            <tr>
                                <th className='border-1 border-dark' rowSpan={2}>Item</th>
                                <th className='border-1 border-dark' rowSpan={2}>Description</th>
                                <th className='border-1 border-dark' rowSpan={2}>Indicate if NOT in your possession</th>
                                <th colSpan={3}>Estimated Market Value of YOUR Intrerest</th>
                            </tr>
                            <tr>
                                <th className='border-1 border-dark'>on date of marriage</th>
                                <th className='border-1 border-dark'>on valuation date</th>
                                <th className='border-1 border-dark'>today</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='inputs'>
                                <td className='border-1 border-dark'><p className="paragraph text-start">Household goods & furniture</p></td>
                                <td className='border-1 border-dark'><textarea className="form-control" value={formData.assets.household.furniture.description}
                                    onChange={fillFormData('assets.household.furniture.description')} /></td>
                                <td className='border-1 border-dark'><textarea className="form-control" value={formData.assets.household.furniture.indication}
                                    onChange={fillFormData('assets.household.furniture.indication')} /></td>
                                <td className='border-1 border-dark'><textarea className="form-control" value={formData.assets.household.furniture.onDateOfMarriage}
                                    onChange={fillFormData('assets.household.furniture.onDateOfMarriage')} /></td>
                                <td className='border-1 border-dark'><textarea className="form-control" value={formData.assets.household.furniture.onValuationDate}
                                    onChange={fillFormData('assets.household.furniture.onValuationDate')} /></td>
                                <td className='border-1 border-dark'><textarea className="form-control" value={formData.assets.household.furniture.today}
                                    onChange={fillFormData('assets.household.furniture.today')} /></td>
                            </tr>
                            <tr className='inputs'>
                                <td className='border-1 border-dark'><p className="paragraph text-start">Cars, boats, vehicles</p></td>
                                <td className='border-1 border-dark'><textarea className="form-control" value={formData.assets.household.vehicles.description}
                                    onChange={fillFormData('assets.household.vehicles.description')} /></td>
                                <td className='border-1 border-dark'><textarea className="form-control" value={formData.assets.household.vehicles.indication}
                                    onChange={fillFormData('assets.household.vehicles.indication')} /></td>
                                <td className='border-1 border-dark'><textarea className="form-control"
                                    value={formData.assets.household.vehicles.onDateOfMarriage}
                                    onChange={fillFormData('assets.household.vehicles.onDateOfMarriage')} /></td>
                                <td className='border-1 border-dark'><textarea className="form-control"
                                    value={formData.assets.household.vehicles.onValuationDate}
                                    onChange={fillFormData('assets.household.vehicles.onValuationDate')} /></td>
                                <td className='border-1 border-dark'><textarea className="form-control" value={formData.assets.household.vehicles.today}
                                    onChange={fillFormData('assets.household.vehicles.today')} /></td>
                            </tr>
                            <tr className='inputs'>
                                <td className='border-1 border-dark'><p className="paragraph text-start">Jewellery, art, electronics, tools, sports & hobby
                                    equipment</p></td>
                                <td className='border-1 border-dark'><textarea className="form-control" value={formData.assets.household.equipment.description}
                                    onChange={fillFormData('assets.household.equipment.description')} /></td>
                                <td className='border-1 border-dark'><textarea className="form-control" value={formData.assets.household.equipment.indication}
                                    onChange={fillFormData('assets.household.equipment.indication')} /></td>
                                <td className='border-1 border-dark'><textarea className="form-control"
                                    value={formData.assets.household.equipment.onDateOfMarriage}
                                    onChange={fillFormData('assets.household.equipment.onDateOfMarriage')} /></td>
                                <td className='border-1 border-dark'><textarea className="form-control"
                                    value={formData.assets.household.equipment.onValuationDate}
                                    onChange={fillFormData('assets.household.equipment.onValuationDate')} /></td>
                                <td className='border-1 border-dark'><textarea className="form-control" value={formData.assets.household.equipment.today}
                                    onChange={fillFormData('assets.household.equipment.today')} /></td>
                            </tr>
                            <tr className='inputs'>
                                <td className='border-1 border-dark'><p className="paragraph text-start">Other special items</p></td>
                                <td className='border-1 border-dark'><textarea className="form-control" value={formData.assets.household.other.description}
                                    onChange={fillFormData('assets.household.other.description')} /></td>
                                <td className='border-1 border-dark'><textarea className="form-control" value={formData.assets.household.other.indication}
                                    onChange={fillFormData('assets.household.other.indication')} /></td>
                                <td className='border-1 border-dark'><textarea className="form-control"
                                    value={formData.assets.household.other.onDateOfMarriage}
                                    onChange={fillFormData('assets.household.other.onDateOfMarriage')} /></td>
                                <td className='border-1 border-dark'><textarea className="form-control"
                                    value={formData.assets.household.other.onValuationDate}
                                    onChange={fillFormData('assets.household.other.onValuationDate')} /></td>
                                <td className='border-1 border-dark'><textarea className="form-control" value={formData.assets.household.other.today}
                                    onChange={fillFormData('assets.household.other.today')} /></td>
                            </tr>
                            <tr className='results'>
                                <td colSpan={4} className="paragraph fw-bold text-end border-1 border-dark"> 16. TOTAL VALUE OF GENERAL HOUSEHOLD
                                    ITEMS AND VEHICLES
                                </td>
                                <td className='border-1 border-dark'><input className="form-control text-end" value={formData.assets.household.total1}
                                    onChange={fillFormData('assets.household.total1')} /></td>
                                <td className='border-1 border-dark'><input className="form-control text-end" value={formData.assets.household.total2}
                                    onChange={fillFormData('assets.household.total2')} /></td>
                            </tr>
                        </tbody>
                    </table>

                </div>

                {/* 4(c) Bank Accounts, Savings Securities and Pensions */}
                <div className="row pb-20px pl-40px">
                    <p className="sub-heading">Part 4(c): BANK ACCOUNTS, SAVINGS SECURITIES AND PENSIONS</p>

                    <p className="paragraph fst-italic">Show the items owned on the dates in each of the columns below by
                        category, for example, cash, accounts in financial institutions, pensions, registered retirement or
                        other savings plans, deposit receipts, any other savings, bonds, warrants, options, notes and other
                        securities. Give your best estimate of the market value of the securities if the items were to be
                        sold on the open market.</p>

                    {/* Table */}
                    <table className='pb-40px form-131-4c border-1 border-dark'>
                        <thead>
                            <tr>
                                <th className='border-1 border-dark' rowSpan={2}>Category</th>
                                <th className='border-1 border-dark' rowSpan={2}>
                                    INSTITUTION <small>(including location)</small>|
                                    <br />Description <small>(including issuer and date)</small>
                                </th>
                                <th className='border-1 border-dark' rowSpan={2}>Account number</th>
                                <th className='border-1 border-dark' colSpan={3}>Amount/Estimated Market Value</th>
                            </tr>
                            <tr>
                                <th className='border-1 border-dark'>on date of marriage</th>
                                <th className='border-1 border-dark'>on valuation date</th>
                                <th className='border-1 border-dark'>today</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='inputs'>
                                <td className='border-1 border-dark'><textarea className="form-control" value={formData.assets.bank.category}
                                    onChange={fillFormData('assets.bank.category')} /></td>
                                <td className='border-1 border-dark'><textarea className="form-control" value={formData.assets.bank.description}
                                    onChange={fillFormData('assets.bank.description')} /></td>
                                <td className='border-1 border-dark'><textarea className="form-control" value={formData.assets.bank.accountNumber}
                                    onChange={fillFormData('assets.bank.accountNumber')} /></td>
                                <td className='border-1 border-dark'><textarea className="form-control" value={formData.assets.bank.onDateOfMarriage}
                                    onChange={fillFormData('assets.bank.onDateOfMarriage')} /></td>
                                <td className='border-1 border-dark'><textarea className="form-control" value={formData.assets.bank.onValuationDate}
                                    onChange={fillFormData('assets.bank.onValuationDate')} /></td>
                                <td className='border-1 border-dark'><textarea className="form-control" value={formData.assets.bank.today}
                                    onChange={fillFormData('assets.bank.today')} /></td>
                            </tr>
                            <tr className='results'>
                                <td colSpan={4} className="paragraph fw-bold text-end border-1 border-dark"> 17. TOTAL VALUE OF ACCOUNTS, SAVINGS
                                    SECURITIES AND PENSIONS
                                </td>
                                <td className='border-1 border-dark'><input className="form-control text-end" value={formData.assets.bank.total1}
                                    onChange={fillFormData('assets.bank.total1')} /></td>
                                <td className='border-1 border-dark'><input className="form-control text-end" value={formData.assets.bank.total2}
                                    onChange={fillFormData('assets.bank.total2')} /></td>
                            </tr>
                        </tbody>
                    </table>

                </div>

                {/* 4(d) Life and Disability Insurance */}
                <div className="row pb-20px pl-40px">
                    <p className="sub-heading">Part 4(d): LIFE AND DISABILITY INSURANCE</p>

                    <p className="paragraph fst-italic">List all policies in existence on the dates in each of the columns
                        below.</p>

                    {/* Table */}
                    <table className='pb-40px form-131-4d border-1 border-dark'>
                        <thead>
                            <tr>
                                <th className='border-1 border-dark' rowSpan={2}>Company, Type & Policy No.</th>
                                <th className='border-1 border-dark' rowSpan={2}>Owner</th>
                                <th className='border-1 border-dark' rowSpan={2}>Beneficiary</th>
                                <th className='border-1 border-dark' rowSpan={2}>Face Amount</th>
                                <th className='border-1 border-dark' colSpan={3}>Cash Surrender Value</th>
                            </tr>
                            <tr>
                                <th className='border-1 border-dark'>on date of marriage</th>
                                <th className='border-1 border-dark'>on valuation date</th>
                                <th className='border-1 border-dark'>today</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='inputs'>
                                <td className='border-1 border-dark'><textarea className="form-control" value={formData.assets.life.company}
                                    onChange={fillFormData('assets.life.company')} /></td>
                                <td className='border-1 border-dark'><textarea className="form-control" value={formData.assets.life.owner}
                                    onChange={fillFormData('assets.life.owner')} /></td>
                                <td className='border-1 border-dark'><textarea className="form-control" value={formData.assets.life.beneficiary}
                                    onChange={fillFormData('assets.life.beneficiary')} /></td>
                                <td className='border-1 border-dark'><textarea className="form-control" value={formData.assets.life.faceAmount}
                                    onChange={fillFormData('assets.life.faceAmount')} /></td>
                                <td className='border-1 border-dark'><textarea className="form-control" value={formData.assets.life.onDateOfMarriage}
                                    onChange={fillFormData('assets.life.onDateOfMarriage')} /></td>
                                <td className='border-1 border-dark'><textarea className="form-control" value={formData.assets.life.onValuationDate}
                                    onChange={fillFormData('assets.life.onValuationDate')} /></td>
                                <td className='border-1 border-dark'><textarea className="form-control" value={formData.assets.life.today}
                                    onChange={fillFormData('assets.life.today')} /></td>
                            </tr>
                            <tr className='results'>
                                <td colSpan={5} className="paragraph fw-bold text-end border-1 border-dark"> 18. TOTAL VALUE OF LIFE AND DISABILITY
                                    INSURANCE
                                </td>
                                <td className='border-1 border-dark'><input className="form-control text-end" value={formData.assets.life.total1}
                                    onChange={fillFormData('assets.life.total1')} /></td>
                                <td className='border-1 border-dark'><input className="form-control text-end" value={formData.assets.life.total2}
                                    onChange={fillFormData('assets.life.total2')} /></td>
                            </tr>
                        </tbody>
                    </table>

                </div>

                {/* 4(e) Business Interests */}
                <div className="row pb-20px pl-40px">
                    <p className="sub-heading">Part 4(e): BUSINESS INTERESTS</p>

                    <p className="paragraph fst-italic">Show any interest in an unincorporated business owned on the dates
                        in each of the columns below. An interest in an incorporated business may be shown here or under
                        "BANK ACCOUNTS, SAVINGS, SECURITIES, AND PENSIONS" in Part 4(c). Give your best estimate of the
                        market value of your interest.</p>

                    {/* Table */}
                    <table className='pb-40px form-131-4e border-1 border-dark'>
                        <thead>
                            <tr>
                                <th className='border-1 border-dark' rowSpan={2}>Name of Firm or Company</th>
                                <th className='border-1 border-dark' rowSpan={2}>Interest</th>
                                <th className='border-1 border-dark' colSpan={3}>Estimated Market Value of YOUR Interest</th>
                            </tr>
                            <tr>
                                <th className='border-1 border-dark'>on date of marriage</th>
                                <th className='border-1 border-dark'>on valuation date</th>
                                <th className='border-1 border-dark'>today</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='inputs'>
                                <td className='border-1 border-dark'><textarea className="form-control" value={formData.assets.interests.company}
                                    onChange={fillFormData('assets.interests.company')} /></td>
                                <td className='border-1 border-dark'><textarea className="form-control" value={formData.assets.interests.interest}
                                    onChange={fillFormData('assets.interests.interest')} /></td>
                                <td className='border-1 border-dark'><textarea className="form-control" value={formData.assets.interests.onDateOfMarriage}
                                    onChange={fillFormData('assets.interests.onDateOfMarriage')} /></td>
                                <td className='border-1 border-dark'><textarea className="form-control" value={formData.assets.interests.onValuationDate}
                                    onChange={fillFormData('assets.interests.onValuationDate')} /></td>
                                <td className='border-1 border-dark'><textarea className="form-control" value={formData.assets.interests.today}
                                    onChange={fillFormData('assets.interests.today')} /></td>
                            </tr>
                            <tr className='results'>
                                <td colSpan={3} className="paragraph fw-bold text-end border-1 border-dark"> 19. TOTAL VALUE OF BUSINESS INTERESTS
                                </td>
                                <td className='border-1 border-dark'><input className="form-control text-end" value={formData.assets.interests.total1}
                                    onChange={fillFormData('assets.interests.total1')} /></td>
                                <td className='border-1 border-dark'><input className="form-control text-end" value={formData.assets.interests.total2}
                                    onChange={fillFormData('assets.interests.total2')} /></td>
                            </tr>
                        </tbody>
                    </table>

                </div>

                {/* 4(f) Money Owed To You */}
                <div className="row pb-20px pl-40px">
                    <p className="sub-heading">Part 4(f): MONEY OWED TO YOU</p>

                    <p className="paragraph fst-italic">Give details of all money that other persons owe to you on the dates
                        in each of the columns below, whether because of business or from personal dealings. Include any
                        court judgments in your favour, any estate money and any income tax refunds owed to you.</p>

                    {/* Table */}
                    <table className='pb-40px form-131-4d border-1 border-dark'>
                        <thead>
                            <tr>
                                <th className='border-1 border-dark' rowSpan={2}>Details</th>
                                <th className='border-1 border-dark' colSpan={3}>Amount Owed to You</th>
                            </tr>
                            <tr>
                                <th className='border-1 border-dark'>on date of marriage</th>
                                <th className='border-1 border-dark'>on valuation date</th>
                                <th className='border-1 border-dark'>today</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='inputs'>
                                <td className='border-1 border-dark'><textarea className="form-control" value={formData.assets.moneyOwed.details}
                                    onChange={fillFormData('assets.moneyOwed.details')} /></td>
                                <td className='border-1 border-dark'><textarea className="form-control" value={formData.assets.moneyOwed.onDateOfMarriage}
                                    onChange={fillFormData('assets.moneyOwed.onDateOfMarriage')} /></td>
                                <td className='border-1 border-dark'><textarea className="form-control" value={formData.assets.moneyOwed.onValuationDate}
                                    onChange={fillFormData('assets.moneyOwed.onValuationDate')} /></td>
                                <td className='border-1 border-dark'><textarea className="form-control" value={formData.assets.moneyOwed.today}
                                    onChange={fillFormData('assets.moneyOwed.today')} /></td>
                            </tr>
                            <tr className='results'>
                                <td colSpan={2} className="paragraph fw-bold text-end border-1 border-dark"> 20. TOTAL VALUE OF MONEY OWED TO YOU
                                </td>
                                <td className='border-1 border-dark'><input className="form-control text-end" value={formData.assets.moneyOwed.total1}
                                    onChange={fillFormData('assets.moneyOwed.total1')} /></td>
                                <td className='border-1 border-dark'><input className="form-control text-end" value={formData.assets.moneyOwed.total2}
                                    onChange={fillFormData('assets.moneyOwed.total2')} /></td>
                            </tr>
                        </tbody>
                    </table>

                </div>

                {/* 4(g) Other Property */}
                <div className="row pb-20px pl-40px">
                    <p className="sub-heading">Part 4(g): OTHER PROPERTY</p>

                    <p className="paragraph fst-italic">Show other property or assets owned on the dates in each of the
                        columns below. Inlcude property on any kind not listed above. Give your best estimate of market
                        value.</p>

                    {/* Table */}
                    <table className='pb-40px form-131-4g border-1 border-dark'>
                        <thead>
                            <tr>
                                <th className='border-1 border-dark' rowSpan={2}>Category</th>
                                <th className='border-1 border-dark' rowSpan={2}>Details</th>
                                <th className='border-1 border-dark' colSpan={3}>Estimated Market Value of YOUR Interest</th>
                            </tr>
                            <tr>
                                <th className='border-1 border-dark'>on date of marriage</th>
                                <th className='border-1 border-dark'>on valuation date</th>
                                <th className='border-1 border-dark'>today</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='inputs'>
                                <td className='border-1 border-dark'><textarea className="form-control" value={formData.assets.otherProperty.category}
                                    onChange={fillFormData('assets.otherProperty.category')} /></td>
                                <td className='border-1 border-dark'><textarea className="form-control" value={formData.assets.otherProperty.details}
                                    onChange={fillFormData('assets.otherProperty.details')} /></td>
                                <td className='border-1 border-dark'><textarea className="form-control" value={formData.assets.otherProperty.onDateOfMarriage}
                                    onChange={fillFormData('assets.otherProperty.onDateOfMarriage')} /></td>
                                <td className='border-1 border-dark'><textarea className="form-control" value={formData.assets.otherProperty.onValuationDate}
                                    onChange={fillFormData('assets.otherProperty.onValuationDate')} /></td>
                                <td className='border-1 border-dark'><textarea className="form-control" value={formData.assets.otherProperty.today}
                                    onChange={fillFormData('assets.otherProperty.today')} /></td>
                            </tr>
                            <tr className='results'>
                                <td colSpan={3} className="paragraph fw-bold text-end border-1 border-dark"> 21. TOTAL VALUE OF OTHER PROPERTY</td>
                                <td className='border-1 border-dark'><input className="form-control text-end" value={formData.assets.otherProperty.total1}
                                    onChange={fillFormData('assets.otherProperty.total1')} /></td>
                                <td className='border-1 border-dark'><input className="form-control text-end" value={formData.assets.otherProperty.total2}
                                    onChange={fillFormData('assets.otherProperty.total2')} /></td>
                            </tr>
                            <tr className='results'>
                                <td colSpan={3} className="paragraph fw-bold text-end border-1 border-dark">
                                    22. VALUE OF ALL PROPERTY OWNED ON THE VALUATION DATE
                                    <small><i> (Add items <b>[15]</b> to <b>[21] </b></i>)</small>
                                </td>
                                <td className='border-1 border-dark'><input className="form-control text-end" value={formData.assets.otherProperty.totalOwned1}
                                    onChange={fillFormData('assets.otherProperty.totalOwned1')} /></td>
                                <td className='border-1 border-dark'><input className="form-control text-end" value={formData.assets.otherProperty.totalOwned2}
                                    onChange={fillFormData('assets.otherProperty.totalOwned2')} /></td>
                            </tr>
                        </tbody>
                    </table>

                </div>

                {/* 5 Debts and Other Liabilities */}
                <div className="row pb-20px pl-40px">
                    <p className="sub-heading">Part 5: DEBTS AND OTHER LIABILITIES</p>

                    <p className="paragraph fst-italic">
                        Show your debts and other liabilities on the dates in each of the columns below. List them by
                        category such as mortgages, charges, liens, notes, credit cards, and accounts payable. Don't forget
                        to include:

                        <ul>
                            <li>any money owed to the Canada Revenue Agency;</li>
                            <li>contingent liabilities such as guarantees or warranties given by you (but indicate that they
                                are contingent); and
                            </li>
                            <li>any unpaid legal or professional bills as a result of this case.</li>
                        </ul>
                    </p>

                    {/* Table */}
                    <table className='pb-40px form-131-5 border-1 border-dark'>
                        <thead>
                            <tr>
                                <th className='border-1 border-dark' rowSpan={2}>Category</th>
                                <th className='border-1 border-dark' rowSpan={2}>Details</th>
                                <th className='border-1 border-dark' colSpan={3}>Amount Owing</th>
                            </tr>
                            <tr>
                                <th className='border-1 border-dark'>on date of marriage</th>
                                <th className='border-1 border-dark'>on valuation date</th>
                                <th className='border-1 border-dark'>today</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='inputs'>
                                <td className='border-1 border-dark'><textarea className="form-control" value={formData.assets.debts.category}
                                    onChange={fillFormData('assets.debts.category')} /></td>
                                <td className='border-1 border-dark'><textarea className="form-control" value={formData.assets.debts.details}
                                    onChange={fillFormData('assets.debts.details')} /></td>
                                <td className='border-1 border-dark'><textarea className="form-control" value={formData.assets.debts.onDateOfMarriage}
                                    onChange={fillFormData('assets.debts.onDateOfMarriage')} /></td>
                                <td className='border-1 border-dark'><textarea className="form-control" value={formData.assets.debts.onValuationDate}
                                    onChange={fillFormData('assets.debts.onValuationDate')} /></td>
                                <td className='border-1 border-dark'><textarea className="form-control" value={formData.assets.debts.today}
                                    onChange={fillFormData('assets.debts.today')} /></td>
                            </tr>
                            <tr className='results'>
                                <td colSpan={3} className="paragraph fw-bold text-end border-1 border-dark"> 23. TOTAL VALUE OF DEBTS AND OTHER
                                    LIABILITIES
                                </td>
                                <td className='border-1 border-dark'><input className="form-control text-end" value={formData.assets.debts.total1}
                                    onChange={fillFormData('assets.debts.total1')} /></td>
                                <td className='border-1 border-dark'><input className="form-control text-end" value={formData.assets.debts.total2}
                                    onChange={fillFormData('assets.debts.total2')} /></td>
                            </tr>
                        </tbody>
                    </table>

                </div>

                {/* 6 Property, Debts and Other Liabilities on Date of Marriage */}
                <div className="row pb-20px pl-40px">
                    <p className="sub-heading">Part 6: PROPERTY, DEBTS AND OTHER LIABILITIES ON DATE OF MARRIAGE</p>

                    <p className="paragraph fst-italic">Show by category the value of your property, debts and other
                        liabilities, calculated as of the date of your marriage. (In this part, do not include the value of
                        a matrimonial home or debts or other liabilities directly related to its purchase or significant
                        improvement, if you and your spouse ordinarily occupied this property as your family residence at
                        the time of separation.)</p>

                    {/* Table */}
                    <table className='pb-40px form-131-6'>
                        <thead>
                            <tr>
                                <th className='border-1 border-dark' rowSpan={2}>Category and Details</th>
                                <th className='border-1 border-dark' colSpan={2}>Value on date of marriage</th>
                            </tr>
                            <tr>
                                <th className='border-1 border-dark'>Assets</th>
                                <th className='border-1 border-dark'>Liabilities</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='inputs'>
                                <td className="paragraph border-1 border-dark"> Land</td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.assets.property.land.assets}
                                    onChange={fillFormData('assets.property.land.assets')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.assets.property.land.liabilities}
                                    onChange={fillFormData('assets.property.land.liabilities')} /></td>
                            </tr>
                            <tr className='inputs'>
                                <td className="paragraph border-1 border-dark"> General Household items & vehicles</td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.assets.property.household.assets}
                                    onChange={fillFormData('assets.property.household.assets')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.assets.property.household.liabilities}
                                    onChange={fillFormData('assets.property.household.liabilities')} /></td>
                            </tr>
                            <tr className='inputs'>
                                <td className="paragraph border-1 border-dark"> Bank accounts, savings, securities & pensions</td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.assets.property.bank.assets}
                                    onChange={fillFormData('assets.property.bank.assets')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.assets.property.bank.liabilities}
                                    onChange={fillFormData('assets.property.bank.liabilities')} /></td>
                            </tr>
                            <tr className='inputs'>
                                <td className="paragraph border-1 border-dark"> Life & disability insurance</td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.assets.property.life.assets}
                                    onChange={fillFormData('assets.property.life.assets')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.assets.property.life.liabilities}
                                    onChange={fillFormData('assets.property.life.liabilities')} /></td>
                            </tr>
                            <tr className='inputs'>
                                <td className="paragraph border-1 border-dark"> Business interests</td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.assets.property.interests.assets}
                                    onChange={fillFormData('assets.property.interests.assets')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.assets.property.interests.liabilities}
                                    onChange={fillFormData('assets.property.interests.liabilities')} /></td>
                            </tr>
                            <tr className='inputs'>
                                <td className="paragraph border-1 border-dark"> Money owed to you</td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.assets.property.moneyOwed.assets}
                                    onChange={fillFormData('assets.property.moneyOwed.assets')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.assets.property.moneyOwed.liabilities}
                                    onChange={fillFormData('assets.property.moneyOwed.liabilities')} /></td>
                            </tr>
                            <tr className='inputs'>
                                <td className="paragraph border-1 border-dark"> Other property (Specify.)</td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.assets.property.otherProperty.assets}
                                    onChange={fillFormData('assets.property.otherProperty.assets')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.assets.property.otherProperty.liabilities}
                                    onChange={fillFormData('assets.property.otherProperty.liabilities')} /></td>
                            </tr>
                            <tr className='inputs'>
                                <td className="paragraph border-1 border-dark"> Debts and other liabilities (Specify.)</td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.assets.property.debts.assets}
                                    onChange={fillFormData('assets.property.debts.assets')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.assets.property.debts.liabilities}
                                    onChange={fillFormData('assets.property.debts.liabilities')} /></td>
                            </tr>
                            <tr className='results'>
                                <td className="paragraph fw-bold text-end border-1 border-dark"> TOTALS</td>
                                <td className='border-1 border-dark'><input className="form-control text-end" value={formData.assets.property.total1}
                                    onChange={fillFormData('assets.property.total1')} /></td>
                                <td className='border-1 border-dark'><input className="form-control text-end" value={formData.assets.property.total2}
                                    onChange={fillFormData('assets.property.total2')} /></td>
                            </tr>
                            <tr className='results'>
                                <td className="paragraph fw-bold text-end border-1 border-dark">
                                    24. NET VALUE OF PROPERTY OWNED ON DATE OF MARRIAGE
                                    <br /><small><i> (From the total of the "Assets" column, subtract the total of the
                                        "Liabilities" column.)</i></small>
                                </td>
                                <td className='border-1 border-dark'><input className="form-control text-end" style={{ height: '45px' }} value={formData.assets.property.netValue1}
                                    onChange={fillFormData('assets.property.netValue1')} /></td>
                                <td className='border-1 border-dark'><input className="form-control text-end" style={{ height: '45px' }} value={formData.assets.property.netValue2}
                                    onChange={fillFormData('assets.property.netValue2')} /></td>
                            </tr>
                            <tr className='results'>
                                <td className="paragraph fw-bold text-end border-1 border-dark">
                                    24. VALUE OF ALL DEDUCTIONS
                                    <small><i> (Add items <b>[23]</b> and <b>[24]</b>.</i></small>
                                </td>
                                <td className='border-1 border-dark'><input className="form-control text-end" value={formData.assets.property.valueOfDeductions1}
                                    onChange={fillFormData('assets.property.valueOfDeductions1')} /></td>
                                <td className='border-1 border-dark'><input className="form-control text-end" value={formData.assets.property.valueOfDeductions2}
                                    onChange={fillFormData('assets.property.valueOfDeductions2')} /></td>
                            </tr>
                        </tbody>
                    </table>

                </div>

                {/* 7 Excluded Property */}
                <div className="row pb-20px pl-40px">
                    <p className="sub-heading">Part 7: EXCLUDED PROPERTY</p>

                    <p className="paragraph fst-italic">Show by category the value of property owned on the valuation date
                        that is excluded from the definition of "net family property" (such as gifts or inheritances
                        received after marriage).</p>

                    {/* Table */}
                    <table className='pb-40px form-131-7'>
                        <thead>
                            <tr>
                                <th className='border-1 border-dark'>Category</th>
                                <th className='border-1 border-dark'>Details</th>
                                <th className='border-1 border-dark'>Value on valuation date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='inputs'>
                                <td className='border-1 border-dark'><textarea className="form-control" value={formData.assets.excluded.category}
                                    onChange={fillFormData('assets.excluded.category')} /></td>
                                <td className='border-1 border-dark'><textarea className="form-control" value={formData.assets.excluded.details}
                                    onChange={fillFormData('assets.excluded.details')} /></td>
                                <td className='border-1 border-dark'><textarea className="form-control" value={formData.assets.excluded.onValuationDate}
                                    onChange={fillFormData('assets.excluded.onValuationDate')} /></td>
                            </tr>
                            <tr className='results'>
                                <td colSpan={2} className="paragraph fw-bold text-end border-1 border-dark"> 26. TOTAL VALUE OF EXCLUDED PROPERTY
                                </td>
                                <td className='border-1 border-dark'><input className="form-control text-end" value={formData.assets.excluded.total}
                                    onChange={fillFormData('assets.excluded.total')} /></td>
                            </tr>
                        </tbody>
                    </table>

                </div>

                {/* 8 Disposed-Of Property */}
                <div className="row pb-20px pl-40px">
                    <p className="sub-heading">Part 8: DISPOSED-OF PROPERTY</p>

                    <p className="paragraph fst-italic">Show by category the value of all property that you disposed of
                        during the two years immediately preceding the making of this statement, or during the marriage,
                        whichever period is shorter.</p>

                    {/* Table */}
                    <table className='pb-40px form-131-7'>
                        <thead>
                            <tr>
                                <th className='border-1 border-dark'>Category</th>
                                <th className='border-1 border-dark'>Details</th>
                                <th className='border-1 border-dark'>Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='inputs'>
                                <td className='border-1 border-dark'><textarea className="form-control" value={formData.assets.disposed.category}
                                    onChange={fillFormData('assets.disposed.category')} /></td>
                                <td className='border-1 border-dark'><textarea className="form-control" value={formData.assets.disposed.details}
                                    onChange={fillFormData('assets.disposed.details')} /></td>
                                <td className='border-1 border-dark'><textarea className="form-control" value={formData.assets.disposed.onValuationDate}
                                    onChange={fillFormData('assets.disposed.onValuationDate')} /></td>
                            </tr>
                            <tr className='results'>
                                <td colSpan={2} className="paragraph fw-bold text-end border-1 border-dark"> 27. TOTAL VALUE OF DISPOSED-OF
                                    PROPERTY
                                </td>
                                <td className='border-1 border-dark'><input className="form-control text-end" value={formData.assets.disposed.total}
                                    onChange={fillFormData('assets.disposed.total')} /></td>
                            </tr>
                        </tbody>
                    </table>

                </div>

                {/* 9 Calculation of Net Family Property */}
                <div className="row pb-20px pl-40px">
                    <p className="sub-heading">Part 9: CALCULATION OF NET FAMILY PROPERTY</p>

                    {/* Table */}
                    <table className='pb-40px form-131-9'>
                        <thead>
                            <tr>
                                <th className='border-1 border-dark'></th>
                                <th className='border-1 border-dark'>Deductions</th>
                                <th className='border-1 border-dark'>BALANCE</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='results'>
                                <td colSpan={2} className="paragraph fw-bold text-end border-1 border-dark">
                                    Value of all property owned on valuation date
                                    <small><i> (From item <b>[22]</b> above)</i></small>
                                </td>
                                <td className='border-1 border-dark'><input className="form-control text-end" value={formData.assets.calculations.allProperty}
                                    onChange={fillFormData('assets.calculations.allProperty')} /></td>
                            </tr>
                            <tr className='results'>
                                <td className="paragraph fw-bold text-end border-1 border-dark">
                                    Subtract value of all deductions
                                    <small><i> (From item <b>[25]</b> above)</i></small>
                                </td>
                                <td className='border-1 border-dark'><input className="form-control text-end" value={formData.assets.calculations.subtractDeductions.deductions}
                                    onChange={fillFormData('assets.calculations.subtractDeductions.deductions')} /></td>
                                <td className='border-1 border-dark'><input className="form-control text-end" value={formData.assets.calculations.subtractDeductions.balance}
                                    onChange={fillFormData('assets.calculations.subtractDeductions.balance')} /></td>
                            </tr>
                            <tr className='results'>
                                <td className="paragraph fw-bold text-end border-1 border-dark">
                                    Subtract total value of excluded property
                                    <small><i> (From item <b>[26]</b> above)</i></small>
                                </td>
                                <td className='border-1 border-dark'><input className="form-control text-end"
                                    value={formData.assets.calculations.subtractExcluded.deductions}
                                    onChange={fillFormData('assets.calculations.subtractExcluded.deductions')} /></td>
                                <td className='border-1 border-dark'><input className="form-control text-end"
                                    value={formData.assets.calculations.subtractExcluded.balance}
                                    onChange={fillFormData('assets.calculations.subtractExcluded.balance')} /></td>
                            </tr>
                            <tr className='results'>
                                <td colSpan={2} className="paragraph fw-bold text-end border-1 border-dark">28. NET FAMILY PROPERTY</td>
                                <td className='border-1 border-dark'><input className="form-control text-end" value={formData.assets.calculations.netFamilyProperty}
                                    onChange={fillFormData('assets.calculations.netFamilyProperty')} /></td>
                            </tr>
                        </tbody>
                    </table>

                </div>

                {/* Note */}
                <div className="row pb-20px pl-40px">
                    <p className="paragraph">NOTE:
                        <i>This financial statement must be updated before any court event if it is</i>
                    </p>
                    <ul className="pl-40px">
                        <li>more than 60 days old by the time of the case conference,</li>
                        <li>more than 30 days old by the time the motion is heard, or</li>
                        <li>more than 40 days old by the start of the trial or the start of the trial sitting, whichever
                            comes first.
                        </li>
                    </ul>

                    <p className="paragraph text-decoration-underline">
                        You may update this financial statement by either completing and filing:
                    </p>
                    <ul className="pl-40px">
                        <li>a new financial statement with updated information, or</li>
                        <li>an affidavit in Form 14A setting out the details of any minor changes or confirming that the
                            information contained in this statement remains correct.
                        </li>
                    </ul>
                </div>

                {/* Affirmation + Signature */}
                <div className="row pb-20px pl-40px">
                    <div className="col-8">
                        <div className="data-input">
                            <div className="label">Sworn/Affirmed before me at (municipality)</div>
                            <input type="text" className="form-control" value={formData.declaration.muncipility}
                                onChange={fillFormData('declaration.muncipility')} />
                        </div>
                        <div className="data-input mt-20px">
                            <div className="label">in (province, state or country)</div>
                            <input type="text" className="form-control" value={formData.declaration.state}
                                onChange={fillFormData('declaration.state')} />
                        </div>
                        <div className="data-input mt-20px">
                            <div className="label">on (date)</div>
                            <input type="date" className="form-control" value={formData.declaration.date}
                                onChange={fillFormData('declaration.date')} />
                        </div>
                        <div className="data-input flex-column mt-20px">
                            <input type="text" className="form-control d-block" value={formData.declaration.sigName}
                                onChange={fillFormData('declaration.sigName')} />
                            <div className="label">Commissioner for taking affidavits (Type or print name below if signature
                                is illegible.)
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="data-input flex-column">
                            <input type="text" className="form-control d-block" value={formData.declaration.signature}
                                onChange={fillFormData('declaration.signature')} />
                            <div className="label text-wrap">Signature (This form is to be signed in front of a lawyer,
                                justice of the peace, notary public or commissioner for taking affidavits.)
                            </div>
                        </div>
                    </div>
                </div>

                {/* Schedule A */}
                <div className="row pb-20px pl-40px">
                    <p className="sub-heading">Schedule A: Additional Sources of Income</p>

                    {/* Table */}
                    <table className='pb-40px form-131-schedule-a'>
                        <thead>
                            <tr>
                                <th className='border-1 border-dark'>Line</th>
                                <th className='border-1 border-dark'>Income Sources</th>
                                <th className='border-1 border-dark'>Annual Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='inputs'>
                                <td className="paragraph fw-bold border-1 border-dark"> 1.</td>
                                <td className="paragraph border-1 border-dark"> Net partnership income</td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.scheduleA.incomeSources.partnership}
                                    onChange={fillFormData('scheduleA.incomeSources.partnership')} /></td>
                            </tr>
                            <tr className='inputs'>
                                <td className="paragraph fw-bold border-1 border-dark"> 2.</td>
                                <td className="paragraph border-1 border-dark"> Net rental income (Gross annual rental income of $)</td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.scheduleA.incomeSources.rental}
                                    onChange={fillFormData('scheduleA.incomeSources.rental')} /></td>
                            </tr>
                            <tr className='inputs'>
                                <td className="paragraph fw-bold border-1 border-dark"> 3.</td>
                                <td className="paragraph border-1 border-dark"> Total amount of dividents received from taxable Canadian
                                    corporations
                                </td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.scheduleA.incomeSources.dividends}
                                    onChange={fillFormData('scheduleA.incomeSources.dividends')} /></td>
                            </tr>
                            <tr className='inputs'>
                                <td className="paragraph fw-bold border-1 border-dark"> 4.</td>
                                <td className="paragraph border-1 border-dark"> Total capital gains ($) less capital losses ($)</td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.scheduleA.incomeSources.capital}
                                    onChange={fillFormData('scheduleA.incomeSources.capital')} /></td>
                            </tr>
                            <tr className='inputs'>
                                <td className="paragraph fw-bold border-1 border-dark"> 5.</td>
                                <td className="paragraph border-1 border-dark"> Regitstered retirement savings plan withdrawals</td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.scheduleA.incomeSources.retirement}
                                    onChange={fillFormData('scheduleA.incomeSources.retirement')} /></td>
                            </tr>
                            <tr className='inputs'>
                                <td className="paragraph fw-bold border-1 border-dark"> 6.</td>
                                <td className="paragraph border-1 border-dark"> Income from a Registerede Retirement Income Fund or Annuity</td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.scheduleA.incomeSources.annuity}
                                    onChange={fillFormData('scheduleA.incomeSources.annuity')} /></td>
                            </tr>
                            <tr className='inputs'>
                                <td className="paragraph fw-bold border-1 border-dark"> 7.</td>
                                <td className="paragraph border-1 border-dark"> Any other income (specify source)</td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.scheduleA.incomeSources.other}
                                    onChange={fillFormData('scheduleA.incomeSources.other')} /></td>
                            </tr>
                            <tr className='inputs'>
                                <td colSpan={2} className="paragraph fw-bold border-1 border-dark"> Subtotal</td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.scheduleA.totalIncome}
                                    onChange={fillFormData('scheduleA.totalIncome')} /></td>
                            </tr>
                        </tbody>
                    </table>

                </div>

                {/* Schedule B */}
                <div className="row pb-20px pl-40px">
                    <p className="sub-heading">Schedule B: Special or Extraordinary Expenses for the Child(ren)</p>

                    {/* Table */}
                    <table className='pb-40px form-131-schedule-b'>
                        <thead>
                            <tr>
                                <th className='border-1 border-dark'>Child's Name</th>
                                <th className='border-1 border-dark'>Expenses</th>
                                <th className='border-1 border-dark'>Amount/yr.</th>
                                <th className='border-1 border-dark'>Available Tax Credits or Deductions*</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='inputs'>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.scheduleB.expenses.child1.name}
                                    onChange={fillFormData('scheduleB.expenses.child1.name')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.scheduleB.expenses.child1.expenses}
                                    onChange={fillFormData('scheduleB.expenses.child1.expenses')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.scheduleB.expenses.child1.amount}
                                    onChange={fillFormData('scheduleB.expenses.child1.amount')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.scheduleB.expenses.child1.tax}
                                    onChange={fillFormData('scheduleB.expenses.child1.tax')} /></td>
                            </tr>
                            <tr className='inputs'>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.scheduleB.expenses.child2.name}
                                    onChange={fillFormData('scheduleB.expenses.child2.name')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.scheduleB.expenses.child2.expenses}
                                    onChange={fillFormData('scheduleB.expenses.child2.expenses')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.scheduleB.expenses.child2.amount}
                                    onChange={fillFormData('scheduleB.expenses.child2.amount')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.scheduleB.expenses.child2.tax}
                                    onChange={fillFormData('scheduleB.expenses.child2.tax')} /></td>
                            </tr>
                            <tr className='inputs'>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.scheduleB.expenses.child3.name}
                                    onChange={fillFormData('scheduleB.expenses.child3.name')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.scheduleB.expenses.child3.expenses}
                                    onChange={fillFormData('scheduleB.expenses.child3.expenses')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.scheduleB.expenses.child3.amount}
                                    onChange={fillFormData('scheduleB.expenses.child3.amount')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.scheduleB.expenses.child3.tax}
                                    onChange={fillFormData('scheduleB.expenses.child3.tax')} /></td>
                            </tr>
                            <tr className='inputs'>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.scheduleB.expenses.child4.name}
                                    onChange={fillFormData('scheduleB.expenses.child4.name')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.scheduleB.expenses.child4.expenses}
                                    onChange={fillFormData('scheduleB.expenses.child4.expenses')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.scheduleB.expenses.child4.amount}
                                    onChange={fillFormData('scheduleB.expenses.child4.amount')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.scheduleB.expenses.child4.tax}
                                    onChange={fillFormData('scheduleB.expenses.child4.tax')} /></td>
                            </tr>
                            <tr className='inputs'>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.scheduleB.expenses.child5.name}
                                    onChange={fillFormData('scheduleB.expenses.child5.name')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.scheduleB.expenses.child5.expenses}
                                    onChange={fillFormData('scheduleB.expenses.child5.expenses')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.scheduleB.expenses.child5.amount}
                                    onChange={fillFormData('scheduleB.expenses.child5.amount')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.scheduleB.expenses.child5.tax}
                                    onChange={fillFormData('scheduleB.expenses.child5.tax')} /></td>
                            </tr>
                            <tr className='inputs'>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.scheduleB.expenses.child6.name}
                                    onChange={fillFormData('scheduleB.expenses.child6.name')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.scheduleB.expenses.child6.expenses}
                                    onChange={fillFormData('scheduleB.expenses.child6.expenses')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.scheduleB.expenses.child6.amount}
                                    onChange={fillFormData('scheduleB.expenses.child6.amount')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.scheduleB.expenses.child6.tax}
                                    onChange={fillFormData('scheduleB.expenses.child6.tax')} /></td>
                            </tr>
                            <tr className='inputs'>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.scheduleB.expenses.child7.name}
                                    onChange={fillFormData('scheduleB.expenses.child7.name')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.scheduleB.expenses.child7.expenses}
                                    onChange={fillFormData('scheduleB.expenses.child7.expenses')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.scheduleB.expenses.child7.amount}
                                    onChange={fillFormData('scheduleB.expenses.child7.amount')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.scheduleB.expenses.child7.tax}
                                    onChange={fillFormData('scheduleB.expenses.child7.tax')} /></td>
                            </tr>
                            <tr className='inputs'>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.scheduleB.expenses.child8.name}
                                    onChange={fillFormData('scheduleB.expenses.child8.name')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.scheduleB.expenses.child8.expenses}
                                    onChange={fillFormData('scheduleB.expenses.child8.expenses')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.scheduleB.expenses.child8.amount}
                                    onChange={fillFormData('scheduleB.expenses.child8.amount')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.scheduleB.expenses.child8.tax}
                                    onChange={fillFormData('scheduleB.expenses.child8.tax')} /></td>
                            </tr>
                            <tr className='inputs'>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.scheduleB.expenses.child9.name}
                                    onChange={fillFormData('scheduleB.expenses.child9.name')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.scheduleB.expenses.child9.expenses}
                                    onChange={fillFormData('scheduleB.expenses.child9.expenses')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.scheduleB.expenses.child9.amount}
                                    onChange={fillFormData('scheduleB.expenses.child9.amount')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.scheduleB.expenses.child9.tax}
                                    onChange={fillFormData('scheduleB.expenses.child9.tax')} /></td>
                            </tr>
                            <tr className='inputs'>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.scheduleB.expenses.child10.name}
                                    onChange={fillFormData('scheduleB.expenses.child10.name')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.scheduleB.expenses.child10.expenses}
                                    onChange={fillFormData('scheduleB.expenses.child10.expenses')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.scheduleB.expenses.child10.amount}
                                    onChange={fillFormData('scheduleB.expenses.child10.amount')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.scheduleB.expenses.child10.tax}
                                    onChange={fillFormData('scheduleB.expenses.child10.tax')} /></td>
                            </tr>
                            <tr className='inputs'>
                                <td colSpan={3} className="paragraph fw-bold text-end border-1 border-dark"> Total Net Annual Amount</td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.scheduleB.expenses.totalYearlyAmount}
                                    onChange={fillFormData('scheduleB.expenses.totalYearlyAmount')} /></td>
                            </tr>
                            <tr className='inputs'>
                                <td colSpan={3} className="paragraph fw-bold text-end border-1 border-dark"> Total Net Monthly Amount</td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.scheduleB.expenses.totalMonthlyAmount}
                                    onChange={fillFormData('scheduleB.expenses.totalMonthlyAmount')} /></td>
                            </tr>
                        </tbody>
                    </table>

                </div>

                {/* Acknowledge */}
                <div className="row pb-20px pl-40px">
                    <p className="paragraph fw-bold">*Some of these expenses can be claimed in a parent's income tax return
                        in relation to a tax credit or deduction (for example childcare costs). These credits or deductions
                        must be shown in the above chart.</p>

                    <div className="d-flex flex-row">
                        <div className="form-check d-flex">
                            <input className="form-check-input" type="checkbox" name="i_earns" value="i_earns" id="i_earns"
                                checked={formData.scheduleB.amIEarn === true}
                                onChange={changeFormCheck('scheduleB.amIEarn')}
                            />
                            <label className="form-check-label text-nowrap" htmlFor="i_earns">
                                I earn $
                            </label>
                            <div className="data-input">
                                <input type="text" className="form-control" value={formData.scheduleB.iEarn}
                                    onChange={fillFormData('scheduleB.iEarn')} />
                                <label className="form-check-label text-nowrap">
                                    per year which should be used to determine my share of the above expenses.
                                </label>
                            </div>
                        </div>
                    </div>

                    <p className="paragraph">
                        <span className='fw-bold'>NOTE: </span>
                        Pursuant to the Child Support Guidelines, a court can order that the parents of a child share the
                        costs of the following expenses for the child:
                        <ul>
                            <li>Necessary childcare expenses;</li>
                            <li>Medical insurance premiums and certain health-related expenses for the child that cost more
                                than $100 annually;
                            </li>
                            <li>Extraordinary expenses for the child's education;</li>
                            <li>Post-secondary school expenses; and,</li>
                            <li>Extraordinary expenses for extracurricular activities.</li>
                        </ul>
                    </p>

                </div>


            </div>
            <button onClick={handleDownload}>Download as PDF</button>
        </div>
    )
}

export default FinancialStatement131