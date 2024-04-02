import React, { useState, useRef } from 'react'
import { Margin, usePDF } from 'react-to-pdf';

const FinancialStatement13 = () => {
    const { toPDF, targetRef } = usePDF({
        method: "save",
        filename: "Financial-Statement-13.pdf",
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

        // Assets
        assets: {
            realEstate: {
                property1: { details: '', value: '' },
                property2: { details: '', value: '' },
                property3: { details: '', value: '' },
            },
            vehicles: {
                vehicle1: { details: '', value: '' },
                vehicle2: { details: '', value: '' },
                vehicle3: { details: '', value: '' },
            },
            possessions: {
                possession1: { details: '', value: '' },
                possession2: { details: '', value: '' },
                possession3: { details: '', value: '' },
            },
            investments: {
                investment1: { details: '', value: '' },
                investment2: { details: '', value: '' },
                investment3: { details: '', value: '' },
            },
            bankAccounts: {
                bank1: { details: '', value: '' },
                bank2: { details: '', value: '' },
                bank3: { details: '', value: '' },
            },
            savings: {
                saving1: { details: '', value: '' },
                saving2: { details: '', value: '' },
                saving3: { details: '', value: '' },
            },
            lifeInsurence: {
                policy1: { details: '', value: '' },
                policy2: { details: '', value: '' },
                policy3: { details: '', value: '' },
            },
            interestsInBusiness: {
                business1: { details: '', value: '' },
                business2: { details: '', value: '' },
                business3: { details: '', value: '' },
            },
            moneyOwed: {
                owed1: { details: '', value: '' },
                owed2: { details: '', value: '' },
                owed3: { details: '', value: '' },
            },
            otherAssets: {
                other1: { details: '', value: '' },
                other2: { details: '', value: '' },
                other3: { details: '', value: '' },
            },
            totalAssets: '',
        },

        // Debts
        debts: {
            mortgage: {
                m1: {
                    creditor: '',
                    fullAmount: '',
                    monthlyPayments: '',
                    arePayementsMade: '',
                },
                m2: {
                    creditor: '',
                    fullAmount: '',
                    monthlyPayments: '',
                    arePayementsMade: '',
                },
                m3: {
                    creditor: '',
                    fullAmount: '',
                    monthlyPayments: '',
                    arePayementsMade: '',
                },
            },
            creditCard: {
                c1: {
                    creditor: '',
                    fullAmount: '',
                    monthlyPayments: '',
                    arePayementsMade: '',
                },
                c2: {
                    creditor: '',
                    fullAmount: '',
                    monthlyPayments: '',
                    arePayementsMade: '',
                },
                c3: {
                    creditor: '',
                    fullAmount: '',
                    monthlyPayments: '',
                    arePayementsMade: '',
                },
            },
            unpaidSupport: {
                u1: {
                    creditor: '',
                    fullAmount: '',
                    monthlyPayments: '',
                    arePayementsMade: '',
                },
                u2: {
                    creditor: '',
                    fullAmount: '',
                    monthlyPayments: '',
                    arePayementsMade: '',
                },
                u3: {
                    creditor: '',
                    fullAmount: '',
                    monthlyPayments: '',
                    arePayementsMade: '',
                },
            },
            other: {
                o1: {
                    creditor: '',
                    fullAmount: '',
                    monthlyPayments: '',
                    arePayementsMade: '',
                },
                o2: {
                    creditor: '',
                    fullAmount: '',
                    monthlyPayments: '',
                    arePayementsMade: '',
                },
                o3: {
                    creditor: '',
                    fullAmount: '',
                    monthlyPayments: '',
                    arePayementsMade: '',
                },
            },
            totalDebts: '',
        },

        // Summary
        summary: {
            totalAssets: '',
            subtractTotalDebts: '',
            netWorth: '',
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

        // Schedule C
        scheduleC: {
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
            <div className="pdf-form pdf-form-13b" ref={targetRef} style={{ backgroundColor: '#fff' }}>
                {/* Form Name */}
                <div className="row text-center mb-4" id="page1">
                    <div className="col-12">
                        <div className="fw-bold fs-3 fst-italic">
                            ONTARIO
                        </div>
                    </div>
                </div>

                {/* Form Details */}
                <div className="row" id="page2">
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
                                    <span className="text-nowrap fw-bold">Court File Number</span>
                                    <input type="text" className="form-control border-1 border-dark" id="at" name="at"
                                        value={formData.courtFileNumber}
                                        onChange={fillFormData('courtFileNumber')} />
                                </div>
                                <div className="fw-bolder text-end" style={{ marginTop: '-15px' }}>Form 13: Financial Statement (Support Claims) sworn/affirmed</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Applicants */}
                <div className="row pb-20px pl-40px">
                    <div className="col-6">
                        <div className="fw-bold">Applicant(s)</div>
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
                    <div className="row pb-10px ml-10px border-top border-1 border-dark" />
                </div>


                {/* Instructions */}
                <div className="row pb-20px pl-40px">
                    <p className="sub-heading">Instructions</p>
                    <div className="paragraph">
                        <ol>
                            <li>
                                <p className="paragraph">
                                    You must complete this form if you are making or responding to a claim for child or
                                    spousal support or a claim to change support, unless your only claim for support is a
                                    claim for child support in the table amount under the <i>Child Support Guidelines</i>.
                                </p>
                                <p className="paragraph">
                                    You may also be required to complete and attach additional schedules based on the claims
                                    that have been made in your case or your financial circumstances:
                                </p>
                                <ul>
                                    <li>If you have income that is not shown in Part I of the financial statement (for
                                        example, partnership inco me, dividends, rental income, capital gains or RRSP
                                        income), you must also complete <b>Schedule A</b>.
                                    </li>
                                    <li>If you have made or responded to a claim for child support that involves undue
                                        hardship or a claim for spousal support, you must also complete <b>Schedule B</b>.
                                    </li>
                                    <li>If you or the other party has sought a contribution towards special or extraordinary
                                        expenses for the child(ren), you must also complete <b>Schedule C</b>.
                                    </li>
                                </ul>
                            </li>
                        </ol>
                    </div>
                    <p className="paragraph fst-italic">
                        NOTES: You must <b>fully and truthfully</b> complete this financial statement, including any
                        applicable schedules. You must also provide the other party with documents relating to support and a
                        Certificate of Financial Disclosure (Form 13A) as required by Rule 13 of the Family Law Rules.
                    </p>
                    <p className="paragraph fst-italic">
                        If you are making or responding to a claim for property, an equalization payment or the matrimonial
                        home, you must complete Form 13.1: Financial Statement (Property and Support Claims) instead of this
                        form.
                    </p>
                    {/* Separator */}
                    <div className="row pb-10px ml-10px border-top border-1 border-dark" />
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
                <div className="row pb-20px pl-40px ">

                    {/* Table 1 */}
                    <p className="paragraph fst-italic">(In this table you must show all of the income that you are currently receiving whether taxable or not.)</p>
                    <table className='pb-40px form-131-income border-1 border-dark'>
                        <thead className='border-1 border-dark'>
                            <tr className='border-1 border-dark'>
                                <th className='text-center border-1 border-dark'>Income Source</th>
                                <th className='border-1 border-dark'>Amount Received/Month ($)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='border-1 border-dark'>
                                <td className='border-1 border-dark'>
                                    <span className="number">1.</span>
                                    <span className="paragraph">Employment income (before deductions)</span>
                                </td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.income.sources.employmentIncome}
                                    onChange={fillFormData('income.sources.employmentIncome')} /></td>
                            </tr>
                            <tr className='border-1 border-dark'>
                                <td className='border-1 border-dark'>
                                    <span className="number">2.</span>
                                    <span className="paragraph">Commission, tips and bonuses</span>
                                </td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.income.sources.commissionTipsBonuses}
                                    onChange={fillFormData('income.sources.commissionTipsBonuses')} /></td>
                            </tr>
                            <tr className='border-1 border-dark'>
                                <td className='border-1 border-dark'>
                                    <span className="number">3.</span>
                                    <span className="paragraph">Self-employment income (Monthly amount before expenses: $)</span>
                                </td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.income.sources.selfEmploymentIncome}
                                    onChange={fillFormData('income.sources.selfEmploymentIncome')} /></td>
                            </tr>
                            <tr className='border-1 border-dark'>
                                <td className='border-1 border-dark'>
                                    <span className="number">4.</span>
                                    <span className="paragraph">Employment Insurance benefits</span>
                                </td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.income.sources.employmentInsuranceBenefits}
                                    onChange={fillFormData('income.sources.employmentInsuranceBenefits')} /></td>
                            </tr>
                            <tr className='border-1 border-dark'>
                                <td className='border-1 border-dark'>
                                    <span className="number">5.</span>
                                    <span className="paragraph">Workers' compensation benefits</span>
                                </td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.income.sources.workersCompensationBenefits}
                                    onChange={fillFormData('income.sources.workersCompensationBenefits')} /></td>
                            </tr>
                            <tr className='border-1 border-dark'>
                                <td className='border-1 border-dark'>
                                    <span className="number">6.</span>
                                    <span className="paragraph">Social assistance income (including ODSP payments)</span>
                                </td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.income.sources.socialAssistanceIncome}
                                    onChange={fillFormData('income.sources.socialAssistanceIncome')} /></td>
                            </tr>
                            <tr className='border-1 border-dark'>
                                <td className='border-1 border-dark'>
                                    <span className="number">7.</span>
                                    <span className="paragraph">Interest and investment income</span>
                                </td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.income.sources.interestInvestmentIncome}
                                    onChange={fillFormData('income.sources.interestInvestmentIncome')} /></td>
                            </tr>
                            <tr className='border-1 border-dark'>
                                <td className='border-1 border-dark'>
                                    <span className="number">8.</span>
                                    <span className="paragraph">Pension income (including CPP and OAS)</span>
                                </td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.income.sources.pensionIncome}
                                    onChange={fillFormData('income.sources.pensionIncome')} /></td>
                            </tr>
                            <tr className='border-1 border-dark'>
                                <td className='border-1 border-dark'>
                                    <span className="number">9.</span>
                                    <span className="paragraph">Spousal support received from a former spouse/partner</span>
                                </td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.income.sources.spousalSupport}
                                    onChange={fillFormData('income.sources.spousalSupport')} /></td>
                            </tr>
                            <tr className='border-1 border-dark'>
                                <td className='border-1 border-dark'>
                                    <span className="number">10.</span>
                                    <span className="paragraph">Child Tax Benefits or Tax Rebates (e.g. GST)</span>
                                </td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.income.sources.childTaxBenefits}
                                    onChange={fillFormData('income.sources.childTaxBenefits')} /></td>
                            </tr>
                            <tr className='border-1 border-dark'>
                                <td className='border-1 border-dark'>
                                    <span className="number">11.</span>
                                    <span className="paragraph">Other sources of income (e.g. RRSP withdrawals, capital gains)
                                        <i>(*attach Schedule A and divide annual amount by 12)</i>
                                    </span>
                                </td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.income.sources.otherIncome}
                                    onChange={fillFormData('income.sources.otherIncome')} /></td>
                            </tr>
                            <tr className='border-1 border-dark'>
                                <td className='border-1 border-dark'>
                                    <span className="number">12.</span>
                                    <span className="paragraph fw-bold">Total monthly income from all sources:</span>
                                </td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.income.sources.totalMonthlyIncome}
                                    onChange={fillFormData('income.sources.totalMonthlyIncome')} /></td>
                            </tr>
                            <tr className='border-1 border-dark'>
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
                    <p className="paragraph">Provide details of any non-cash benefits that employer provides to you or are paid for by your business such as medical insurance coverage, the use of a company car, or romm and board.</p>
                    <table className='pb-40px form-131-income-inner border-1 border-dark'>
                        <thead >
                            <tr className='border-1 border-dark'>
                                <th className='text-center'>Item</th>
                                <th className='text-center'>Details</th>
                                <th className='text-center'>Yearly Market Values ($)</th>
                            </tr>
                        </thead>
                        <tbody className='border-1 border-dark'>
                            <tr className='border-1 border-dark'>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.income.otherBenefits.b1.item}
                                    onChange={fillFormData('income.otherBenefits.b1.item')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.income.otherBenefits.b1.details}
                                    onChange={fillFormData('income.otherBenefits.b1.details')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.income.otherBenefits.b1.yearlyMarketValues}
                                    onChange={fillFormData('income.otherBenefits.b1.yearlyMarketValues')} /></td>
                            </tr>
                            <tr className='border-1 border-dark'>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.income.otherBenefits.b2.item}
                                    onChange={fillFormData('income.otherBenefits.b2.item')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.income.otherBenefits.b2.details}
                                    onChange={fillFormData('income.otherBenefits.b2.details')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.income.otherBenefits.b2.yearlyMarketValues}
                                    onChange={fillFormData('income.otherBenefits.b2.yearlyMarketValues')} /></td>
                            </tr>
                            <tr className='border-1 border-dark'>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.income.otherBenefits.b3.item}
                                    onChange={fillFormData('income.otherBenefits.b3.item')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.income.otherBenefits.b3.details}
                                    onChange={fillFormData('income.otherBenefits.b3.details')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.income.otherBenefits.b3.yearlyMarketValues}
                                    onChange={fillFormData('income.otherBenefits.b3.yearlyMarketValues')} /></td>
                            </tr>
                            <tr className='border-1 border-dark'>
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
                            <table className='pb-40px form-131-expenses border-1 border-dark'>
                                <thead className='border-1 border-dark'>
                                    <tr className='border-1 border-dark'>
                                        <th className='text-center border-1 border-dark'>Expense</th>
                                        <th className='border-1 border-dark'>Monthly Amount ($)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className='border-1 border-dark'>
                                        <th className='sub-table-heading-3' colSpan={2}>Automatic Deductions</th>
                                    </tr>
                                    <tr className='border-1 border-dark'>
                                        <td className='border-1 border-dark'>CPP contributions</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.automaticDeductions.cppContributions}
                                            onChange={fillFormData('expenses.automaticDeductions.cppContributions')} /></td>
                                    </tr>
                                    <tr className='border-1 border-dark'>
                                        <td className='border-1 border-dark'>EI premiums</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.automaticDeductions.eiPremiums}
                                            onChange={fillFormData('expenses.automaticDeductions.eiPremiums')} /></td>
                                    </tr>
                                    <tr className='border-1 border-dark'>
                                        <td className='border-1 border-dark'>Income taxes</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.automaticDeductions.incomeTaxes}
                                            onChange={fillFormData('expenses.automaticDeductions.incomeTaxes')} /></td>
                                    </tr>
                                    <tr className='border-1 border-dark'>
                                        <td className='border-1 border-dark'>Employee pension contributions</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.automaticDeductions.employeePensionContributions}
                                            onChange={fillFormData('expenses.automaticDeductions.employeePensionContributions')} /></td>
                                    </tr>
                                    <tr className='border-1 border-dark'>
                                        <td className='border-1 border-dark'>Union dues</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.automaticDeductions.unionDues}
                                            onChange={fillFormData('expenses.automaticDeductions.unionDues')} /></td>
                                    </tr>
                                    <tr className='border-1 border-dark'>
                                        <td className='fw-bold'>SUBTOTAL</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.automaticDeductions.subtotal}
                                            onChange={fillFormData('expenses.automaticDeductions.subtotal')} /></td>
                                    </tr>

                                    <tr className='border-1 border-dark'>
                                        <th className='sub-table-heading-3' colSpan={2}>Housing</th>
                                    </tr>
                                    <tr className='border-1 border-dark'>
                                        <td className='border-1 border-dark'>Rent or mortgage</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.housing.rentOrMortgage}
                                            onChange={fillFormData('expenses.housing.rentOrMortgage')} /></td>
                                    </tr>
                                    <tr className='border-1 border-dark'>
                                        <td className='border-1 border-dark'>Property taxes</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.housing.propertyTaxes}
                                            onChange={fillFormData('expenses.housing.propertyTaxes')} /></td>
                                    </tr>
                                    <tr className='border-1 border-dark'>
                                        <td className='border-1 border-dark'>Property insurance</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.housing.propertyInsurance}
                                            onChange={fillFormData('expenses.housing.propertyInsurance')} /></td>
                                    </tr>
                                    <tr className='border-1 border-dark'>
                                        <td className='border-1 border-dark'>Condominium fees</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.housing.condominiumFees}
                                            onChange={fillFormData('expenses.housing.condominiumFees')} /></td>
                                    </tr>
                                    <tr className='border-1 border-dark'>
                                        <td className='border-1 border-dark'>Repairs and maintenance</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.housing.repairsAndMaintenance}
                                            onChange={fillFormData('expenses.housing.repairsAndMaintenance')} /></td>
                                    </tr>
                                    <tr className='border-1 border-dark'>
                                        <td className='fw-bold'>SUBTOTAL</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.housing.subtotal}
                                            onChange={fillFormData('expenses.housing.subtotal')} /></td>
                                    </tr>

                                    <tr className='border-1 border-dark'>
                                        <th className='sub-table-heading-3' colSpan={2}>Utilities</th>
                                    </tr>
                                    <tr className='border-1 border-dark'>
                                        <td className='border-1 border-dark'>Water</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.utilities.water}
                                            onChange={fillFormData('expenses.utilities.water')} /></td>
                                    </tr>
                                    <tr className='border-1 border-dark'>
                                        <td className='border-1 border-dark'>Heat</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.utilities.heat}
                                            onChange={fillFormData('expenses.utilities.heat')} /></td>
                                    </tr>
                                    <tr className='border-1 border-dark'>
                                        <td className='border-1 border-dark'>Electricity</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.utilities.electricity}
                                            onChange={fillFormData('expenses.utilities.electricity')} /></td>
                                    </tr>
                                    <tr className='border-1 border-dark'>
                                        <td className='border-1 border-dark'>Telephone</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.utilities.telephone}
                                            onChange={fillFormData('expenses.utilities.telephone')} /></td>
                                    </tr>
                                    <tr className='border-1 border-dark'>
                                        <td className='border-1 border-dark'>Cell Phone</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.utilities.cellPhone}
                                            onChange={fillFormData('expenses.utilities.cellPhone')} /></td>
                                    </tr>
                                    <tr className='border-1 border-dark'>
                                        <td className='border-1 border-dark'>Cable</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.utilities.cable}
                                            onChange={fillFormData('expenses.utilities.cable')} /></td>
                                    </tr>
                                    <tr className='border-1 border-dark'>
                                        <td className='border-1 border-dark'>Internet</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.utilities.internet}
                                            onChange={fillFormData('expenses.utilities.internet')} /></td>
                                    </tr>
                                    <tr className='border-1 border-dark'>
                                        <td className='fw-bold'>SUBTOTAL</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.utilities.subtotal}
                                            onChange={fillFormData('expenses.utilities.subtotal')} /></td>
                                    </tr>

                                    <tr className='border-1 border-dark'>
                                        <th className='sub-table-heading-3' colSpan={2}>Household Expenses</th>
                                    </tr>
                                    <tr className='border-1 border-dark'>
                                        <td className='border-1 border-dark'>Groceries</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.householdExpenses.groceries}
                                            onChange={fillFormData('expenses.householdExpenses.groceries')} /></td>
                                    </tr>
                                    <tr className='border-1 border-dark'>
                                        <td className='border-1 border-dark'>Household supplies</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.householdExpenses.householdSupplies}
                                            onChange={fillFormData('expenses.householdExpenses.householdSupplies')} /></td>
                                    </tr>
                                    <tr className='border-1 border-dark'>
                                        <td className='border-1 border-dark'>Meals outside the home</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.householdExpenses.mealsOutsideTheHome}
                                            onChange={fillFormData('expenses.householdExpenses.mealsOutsideTheHome')} /></td>
                                    </tr>
                                    <tr className='border-1 border-dark'>
                                        <td className='border-1 border-dark'>Pet care</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.householdExpenses.petCare}
                                            onChange={fillFormData('expenses.householdExpenses.petCare')} /></td>
                                    </tr>
                                    <tr className='border-1 border-dark'>
                                        <td className='border-1 border-dark'>Laundry and Dry Cleaning</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.householdExpenses.laundryAndDryCleaning}
                                            onChange={fillFormData('expenses.householdExpenses.laundryAndDryCleaning')} /></td>
                                    </tr>
                                    <tr className='border-1 border-dark'>
                                        <td className='fw-bold'>SUBTOTAL</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.householdExpenses.subtotal}
                                            onChange={fillFormData('expenses.householdExpenses.subtotal')} /></td>
                                    </tr>

                                    <tr className='border-1 border-dark'>
                                        <th className='sub-table-heading-3' colSpan={2}>Childcare Costs</th>
                                    </tr>
                                    <tr className='border-1 border-dark'>
                                        <td className='border-1 border-dark'>Daycare expenses</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.childcare.daycare}
                                            onChange={fillFormData('expenses.childcare.daycare')} /></td>
                                    </tr>
                                    <tr className='border-1 border-dark'>
                                        <td className='border-1 border-dark'>Babysitting costs</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.childcare.babysitting}
                                            onChange={fillFormData('expenses.childcare.babysitting')} /></td>
                                    </tr>
                                    <tr className='border-1 border-dark'>
                                        <td className='fw-bold'>SUBTOTAL</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.childcare.subtotal}
                                            onChange={fillFormData('expenses.childcare.subtotal')} /></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Right Tables */}
                        <div className="col-6">
                            <table className='pb-40px form-131-expenses'>
                                <thead className='border-1 border-dark'>
                                    <tr className='border-1 border-dark'>
                                        <th className='text-center border-1 border-dark'>Expense</th>
                                        <th className='border-1 border-dark'>Monthly Amount ($)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className='border-1 border-dark'>
                                        <th className='sub-table-heading-3' colSpan={2}>Transportaion</th>
                                    </tr>
                                    <tr className='border-1 border-dark'>
                                        <td className='border-1 border-dark'>Public transit, taxis</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.transportation.publicTransit}
                                            onChange={fillFormData('expenses.transportation.publicTransit')} /></td>
                                    </tr>
                                    <tr className='border-1 border-dark'>
                                        <td className='border-1 border-dark'>Gas and oil</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.transportation.gasAndOil}
                                            onChange={fillFormData('expenses.transportation.gasAndOil')} /></td>
                                    </tr>
                                    <tr className='border-1 border-dark'>
                                        <td className='border-1 border-dark'>Car insurance and licence</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.transportation.insurance}
                                            onChange={fillFormData('expenses.transportation.insurance')} /></td>
                                    </tr>
                                    <tr className='border-1 border-dark'>
                                        <td className='border-1 border-dark'>Repairs and maintenance</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.transportation.repairsAndMaintenance}
                                            onChange={fillFormData('expenses.transportation.repairsAndMaintenance')} /></td>
                                    </tr>
                                    <tr className='border-1 border-dark'>
                                        <td className='border-1 border-dark'>Parking</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.transportation.parking}
                                            onChange={fillFormData('expenses.transportation.parking')} /></td>
                                    </tr>
                                    <tr className='border-1 border-dark'>
                                        <td className='border-1 border-dark'>Car Loan or Lease Payments</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.transportation.carPayments}
                                            onChange={fillFormData('expenses.transportation.carPayments')} /></td>
                                    </tr>
                                    <tr className='border-1 border-dark'>
                                        <td className='fw-bold'>SUBTOTAL</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.transportation.subtotal}
                                            onChange={fillFormData('expenses.transportation.subtotal')} /></td>
                                    </tr>

                                    <tr className='border-1 border-dark'>
                                        <th className='sub-table-heading-3' colSpan={2}>Health</th>
                                    </tr>
                                    <tr className='border-1 border-dark'>
                                        <td className='border-1 border-dark'>Health insurance premiums</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.health.insurance}
                                            onChange={fillFormData('expenses.health.insurance')} /></td>
                                    </tr>
                                    <tr className='border-1 border-dark'>
                                        <td className='border-1 border-dark'>Dental expenses</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.health.dental}
                                            onChange={fillFormData('expenses.health.dental')} /></td>
                                    </tr>
                                    <tr className='border-1 border-dark'>
                                        <td className='border-1 border-dark'>Medicine and drugs</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.health.medicine}
                                            onChange={fillFormData('expenses.health.medicine')} /></td>
                                    </tr>
                                    <tr className='border-1 border-dark'>
                                        <td className='border-1 border-dark'>Eye care</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.health.eyecare}
                                            onChange={fillFormData('expenses.health.eyecare')} /></td>
                                    </tr>
                                    <tr className='border-1 border-dark'>
                                        <td className='fw-bold'>SUBTOTAL</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.health.subtotal}
                                            onChange={fillFormData('expenses.health.subtotal')} /></td>
                                    </tr>

                                    <tr className='border-1 border-dark'>
                                        <th className='sub-table-heading-3' colSpan={2}>Personal</th>
                                    </tr>
                                    <tr className='border-1 border-dark'>
                                        <td className='border-1 border-dark'>Clothing</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.personal.clothing}
                                            onChange={fillFormData('expenses.personal.clothing')} /></td>
                                    </tr>
                                    <tr className='border-1 border-dark'>
                                        <td className='border-1 border-dark'>Hair care and beauty</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.personal.haircare}
                                            onChange={fillFormData('expenses.personal.haircare')} /></td>
                                    </tr>
                                    <tr className='border-1 border-dark'>
                                        <td className='border-1 border-dark'>Alcohol and tobacco</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.personal.alcohol}
                                            onChange={fillFormData('expenses.personal.alcohol')} /></td>
                                    </tr>
                                    <tr className='border-1 border-dark'>
                                        <td className='border-1 border-dark'>Education (specify)</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.personal.education}
                                            onChange={fillFormData('expenses.personal.education')} /></td>
                                    </tr>
                                    <tr className='border-1 border-dark'>
                                        <td className='border-1 border-dark'>Entertainment/recreation (including children)</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.personal.entertainment}
                                            onChange={fillFormData('expenses.personal.entertainment')} /></td>
                                    </tr>
                                    <tr className='border-1 border-dark'>
                                        <td className='border-1 border-dark'>Gifts</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.personal.gifts}
                                            onChange={fillFormData('expenses.personal.gifts')} /></td>
                                    </tr>
                                    <tr className='border-1 border-dark'>
                                        <td className='fw-bold'>SUBTOTAL</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.personal.subtotal}
                                            onChange={fillFormData('expenses.personal.subtotal')} /></td>
                                    </tr>

                                    <tr className='border-1 border-dark'>
                                        <th className='sub-table-heading-3' colSpan={2}>Other Expenses</th>
                                    </tr>
                                    <tr className='border-1 border-dark'>
                                        <td className='border-1 border-dark'>Life Insurance premiums</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.other.lifeInsurance}
                                            onChange={fillFormData('expenses.other.lifeInsurance')} /></td>
                                    </tr>
                                    <tr className='border-1 border-dark'>
                                        <td className='border-1 border-dark'>RRSP/RESP withdrawals</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.other.rrsp}
                                            onChange={fillFormData('expenses.other.rrsp')} /></td>
                                    </tr>
                                    <tr className='border-1 border-dark'>
                                        <td className='border-1 border-dark'>Vacations</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.other.vacations}
                                            onChange={fillFormData('expenses.other.vacations')} /></td>
                                    </tr>
                                    <tr className='border-1 border-dark'>
                                        <td className='border-1 border-dark'>School fees and supplies</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.other.school}
                                            onChange={fillFormData('expenses.other.school')} /></td>
                                    </tr>
                                    <tr className='border-1 border-dark'>
                                        <td className='border-1 border-dark'>Clothing for children</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.other.clothingForChildren}
                                            onChange={fillFormData('expenses.other.clothingForChildren')} /></td>
                                    </tr>
                                    <tr className='border-1 border-dark'>
                                        <td className='border-1 border-dark'>Children's activities</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.other.childrenActivities}
                                            onChange={fillFormData('expenses.other.childrenActivities')} /></td>
                                    </tr>
                                    <tr className='border-1 border-dark'>
                                        <td className='border-1 border-dark'>Summer camp expenses</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.other.summerCamp}
                                            onChange={fillFormData('expenses.other.summerCamp')} /></td>
                                    </tr>
                                    <tr className='border-1 border-dark'>
                                        <td className='border-1 border-dark'>Debt payments</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.other.debtPayments}
                                            onChange={fillFormData('expenses.other.debtPayments')} /></td>
                                    </tr>
                                    <tr className='border-1 border-dark'>
                                        <td className='border-1 border-dark'>Support paid for other children</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.other.supportPaidForOtherChildren}
                                            onChange={fillFormData('expenses.other.supportPaidForOtherChildren')} /></td>
                                    </tr>
                                    <tr className='border-1 border-dark'>
                                        <td className='border-1 border-dark'>Other expenses not shown above (specify)</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.other.other}
                                            onChange={fillFormData('expenses.other.other')} /></td>
                                    </tr>
                                    <tr className='border-1 border-dark'>
                                        <td className='fw-bold'>SUBTOTAL</td>
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
                                    <tr className='border-1 border-dark'>
                                        <td className='fw-bold'>Total Amount of Monthly Expenses ($)</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.totalMonthlyExpenses}
                                            onChange={fillFormData('expenses.totalMonthlyExpenses')} /></td>
                                    </tr>
                                    <tr className='border-1 border-dark'>
                                        <td className='fw-bold'>Total Amount of Yearly Expenses ($)</td>
                                        <td className='border-1 border-dark'><input className="form-control" value={formData.expenses.totalYearlyExpenses}
                                            onChange={fillFormData('expenses.totalYearlyExpenses')} /></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* 3 Assets */}
                <div className="row pb-20px pl-40px">
                    <p className="sub-heading">Part 3: ASSETS</p>

                    {/* Table */}
                    <table className='pb-40px form-13-assets border-1 border-dark'>
                        <thead>
                            <tr >
                                <th className='border-1 border-dark'>Type</th>
                                <th colSpan={2} className='border-1 border-dark'>Details</th>
                                <th className='border-1 border-dark'>Value or Amount ($)</th>
                            </tr>
                        </thead>
                        <tbody >
                            <tr className='border-1 border-dark'>
                                <td colSpan={4}>State Address of EAch Property and Nature of Ownership</td>
                            </tr>
                            <tr >
                                <td rowSpan={3} className='border-1 border-dark'>Real Estate</td>
                                <td className='number border-1 border-dark'>1</td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.assets.realEstate.property1.details}
                                    onChange={fillFormData('assets.realEstate.property1.details')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.assets.realEstate.property1.value}
                                    onChange={fillFormData('assets.realEstate.property1.value')} /></td>
                            </tr>
                            <tr >
                                <td className='number border-1 border-dark'>2</td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.assets.realEstate.property2.details}
                                    onChange={fillFormData('assets.realEstate.property2.details')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.assets.realEstate.property2.value}
                                    onChange={fillFormData('assets.realEstate.property2.value')} /></td>
                            </tr>
                            <tr>
                                <td className='number border-1 border-dark'>3</td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.assets.realEstate.property3.details}
                                    onChange={fillFormData('assets.realEstate.property3.details')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.assets.realEstate.property3.value}
                                    onChange={fillFormData('assets.realEstate.property3.value')} /></td>
                            </tr>

                            <tr>
                                <td className='border-1 border-dark' colSpan={4}>Year and Make</td>
                            </tr>
                            <tr>
                                <td className='border-1 border-dark' rowSpan={3}>Cars, Boats, Vehicles</td>
                                <td className='number border-1 border-dark'>1</td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.assets.vehicles.vehicle1.details}
                                    onChange={fillFormData('assets.vehicles.vehicle1.details')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.assets.vehicles.vehicle1.value}
                                    onChange={fillFormData('assets.vehicles.vehicle1.value')} /></td>
                            </tr>
                            <tr>
                                <td className='number border-1 border-dark'>2</td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.assets.vehicles.vehicle2.details}
                                    onChange={fillFormData('assets.vehicles.vehicle2.details')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.assets.vehicles.vehicle2.value}
                                    onChange={fillFormData('assets.vehicles.vehicle2.value')} /></td>
                            </tr>
                            <tr>
                                <td className='number border-1 border-dark'>3</td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.assets.vehicles.vehicle3.details}
                                    onChange={fillFormData('assets.vehicles.vehicle3.details')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.assets.vehicles.vehicle3.value}
                                    onChange={fillFormData('assets.vehicles.vehicle3.value')} /></td>
                            </tr>

                            <tr>
                                <td className='border-1 border-dark' colSpan={4}>Addres Where Located</td>
                            </tr>
                            <tr>
                                <td className='border-1 border-dark' rowSpan={3}>Other Possessions of Value (e.g. computers, jewellery, collections)</td>
                                <td className='number border-1 border-dark'>1</td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.assets.possessions.possession1.details}
                                    onChange={fillFormData('assets.possessions.possession1.details')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.assets.possessions.possession1.value}
                                    onChange={fillFormData('assets.possessions.possession1.value')} /></td>
                            </tr>
                            <tr>
                                <td className='number border-1 border-dark'>2</td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.assets.possessions.possession2.details}
                                    onChange={fillFormData('assets.possessions.possession2.details')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.assets.possessions.possession2.value}
                                    onChange={fillFormData('assets.possessions.possession2.value')} /></td>
                            </tr>
                            <tr>
                                <td className='number border-1 border-dark'>3</td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.assets.possessions.possession3.details}
                                    onChange={fillFormData('assets.possessions.possession3.details')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.assets.possessions.possession3.value}
                                    onChange={fillFormData('assets.possessions.possession3.value')} /></td>
                            </tr>

                            <tr>
                                <td className='border-1 border-dark' colSpan={4}>Type - Issuer - Due Date - Number of Shares</td>
                            </tr>
                            <tr>
                                <td className='border-1 border-dark' rowSpan={3}>Investments (e.g. bonds, shares, term deposits and mutual funds)</td>
                                <td className='number border-1 border-dark'>1</td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.assets.investments.investment1.details}
                                    onChange={fillFormData('assets.investments.investment1.details')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.assets.investments.investment1.value}
                                    onChange={fillFormData('assets.investments.investment1.value')} /></td>
                            </tr>
                            <tr>
                                <td className='number border-1 border-dark'>2</td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.assets.investments.investment2.details}
                                    onChange={fillFormData('assets.investments.investment2.details')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.assets.investments.investment2.value}
                                    onChange={fillFormData('assets.investments.investment2.value')} /></td>
                            </tr>
                            <tr>
                                <td className='number border-1 border-dark'>3</td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.assets.investments.investment3.details}
                                    onChange={fillFormData('assets.investments.investment3.details')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.assets.investments.investment3.value}
                                    onChange={fillFormData('assets.investments.investment3.value')} /></td>
                            </tr>

                            <tr>
                                <td className='border-1 border-dark' colSpan={4}>Name and Address of Institution - Account Number</td>
                            </tr>
                            <tr>
                                <td className='border-1 border-dark' rowSpan={3}>Bank Accounts</td>
                                <td className='number border-1 border-dark'>1</td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.assets.bankAccounts.bank1.details}
                                    onChange={fillFormData('assets.bankAccounts.bank1.details')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.assets.bankAccounts.bank1.value}
                                    onChange={fillFormData('assets.bankAccounts.bank1.value')} /></td>
                            </tr>
                            <tr>
                                <td className='number border-1 border-dark'>2</td>
                                <td className='border-1 border-dark'><input className="form-control"
                                    value={formData.assets.bankAccounts.bank2.details}
                                    onChange={fillFormData('assets.bankAccounts.bank2.details')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.assets.bankAccounts.bank2.value}
                                    onChange={fillFormData('assets.bankAccounts.bank2.value')} /></td>
                            </tr>
                            <tr>
                                <td className='number border-1 border-dark'>3</td>
                                <td className='border-1 border-dark'><input className="form-control"
                                    value={formData.assets.bankAccounts.bank3.details}
                                    onChange={fillFormData('assets.bankAccounts.bank3.details')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.assets.bankAccounts.bank3.value}
                                    onChange={fillFormData('assets.bankAccounts.bank3.value')} /></td>
                            </tr>

                            <tr>
                                <td className='border-1 border-dark' colSpan={4}>Type and Issuer - Account Number</td>
                            </tr>
                            <tr>
                                <td className='border-1 border-dark' rowSpan={3}>Savings Plans R.R.S.P.s <br /> Pension Plans R.E.S.P.s</td>
                                <td className='number border-1 border-dark'>1</td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.assets.savings.saving1.details}
                                    onChange={fillFormData('assets.savings.saving1.details')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.assets.savings.saving1.value}
                                    onChange={fillFormData('assets.savings.saving1.value')} /></td>
                            </tr>
                            <tr>
                                <td className='number border-1 border-dark'>2</td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.assets.savings.saving2.details}
                                    onChange={fillFormData('assets.savings.saving2.details')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.assets.savings.saving2.value}
                                    onChange={fillFormData('assets.savings.saving2.value')} /></td>
                            </tr>
                            <tr>
                                <td className='number border-1 border-dark'>3</td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.assets.savings.saving3.details}
                                    onChange={fillFormData('assets.savings.saving3.details')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.assets.savings.saving3.value}
                                    onChange={fillFormData('assets.savings.saving3.value')} /></td>
                            </tr>

                            <tr>
                                <td className='border-1 border-dark' colSpan={3}>Type - Beneficiary - Face Amount</td>
                                <td className='border-1 border-dark'>Cash Surrender Value</td>
                            </tr>
                            <tr>
                                <td className='border-1 border-dark' rowSpan={3}>Life Insurance</td>
                                <td className='number border-1 border-dark'>1</td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.assets.lifeInsurence.policy1.details}
                                    onChange={fillFormData('assets.lifeInsurence.policy1.details')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.assets.lifeInsurence.policy1.value}
                                    onChange={fillFormData('assets.lifeInsurence.policy1.value')} /></td>
                            </tr>
                            <tr>
                                <td className='number border-1 border-dark'>2</td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.assets.lifeInsurence.policy2.details}
                                    onChange={fillFormData('assets.lifeInsurence.policy2.details')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.assets.lifeInsurence.policy2.value}
                                    onChange={fillFormData('assets.lifeInsurence.policy2.value')} /></td>
                            </tr>
                            <tr>
                                <td className='number border-1 border-dark'>3</td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.assets.lifeInsurence.policy3.details}
                                    onChange={fillFormData('assets.lifeInsurence.policy3.details')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.assets.lifeInsurence.policy3.value}
                                    onChange={fillFormData('assets.lifeInsurence.policy3.value')} /></td>
                            </tr>

                            <tr>
                                <td className='border-1 border-dark' colSpan={4}>Name and Address of Business</td>
                            </tr>
                            <tr>
                                <td className='border-1 border-dark' rowSpan={3}>Interest in Business <br /><small><i>(*attach separate year-end statements for each business)</i></small></td>
                                <td className='number border-1 border-dark'>1</td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.assets.interestsInBusiness.business1.details}
                                    onChange={fillFormData('assets.interestsInBusiness.business1.details')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.assets.interestsInBusiness.business1.value}
                                    onChange={fillFormData('assets.interestsInBusiness.business1.value')} /></td>
                            </tr>
                            <tr>
                                <td className='number border-1 border-dark'>2</td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.assets.interestsInBusiness.business2.details}
                                    onChange={fillFormData('assets.interestsInBusiness.business2.details')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.assets.interestsInBusiness.business2.value}
                                    onChange={fillFormData('assets.interestsInBusiness.business2.value')} /></td>
                            </tr>
                            <tr>
                                <td className='number border-1 border-dark'>3</td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.assets.interestsInBusiness.business3.details}
                                    onChange={fillFormData('assets.interestsInBusiness.business3.details')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.assets.interestsInBusiness.business3.value}
                                    onChange={fillFormData('assets.interestsInBusiness.business3.value')} /></td>
                            </tr>

                            <tr>
                                <td className='border-1 border-dark' colSpan={4}>Name and Address of Debtors</td>
                            </tr>
                            <tr>
                                <td className='border-1 border-dark' rowSpan={3}>Money Owed to You<br /><small><i>(for example, any court judgments in your favour, estate money and income tax refunds)</i></small></td>
                                <td className='number border-1 border-dark'>1</td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.assets.moneyOwed.owed1.details}
                                    onChange={fillFormData('assets.moneyOwed.owed1.details')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.assets.moneyOwed.owed1.value}
                                    onChange={fillFormData('assets.moneyOwed.owed1.value')} /></td>
                            </tr>
                            <tr>
                                <td className='number border-1 border-dark'>2</td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.assets.moneyOwed.owed2.details}
                                    onChange={fillFormData('assets.moneyOwed.owed2.details')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.assets.moneyOwed.owed2.value}
                                    onChange={fillFormData('assets.moneyOwed.owed2.value')} /></td>
                            </tr>
                            <tr>
                                <td className='number border-1 border-dark'>3</td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.assets.moneyOwed.owed3.details}
                                    onChange={fillFormData('assets.moneyOwed.owed3.details')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.assets.moneyOwed.owed3.value}
                                    onChange={fillFormData('assets.moneyOwed.owed3.value')} /></td>
                            </tr>

                            <tr>
                                <td className='border-1 border-dark' colSpan={4}>Description</td>
                            </tr>
                            <tr>
                                <td className='border-1 border-dark' rowSpan={3}>Other Assets</td>
                                <td className='number border-1 border-dark'>1</td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.assets.otherAssets.other1.details}
                                    onChange={fillFormData('assets.otherAssets.other1.details')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.assets.otherAssets.other1.value}
                                    onChange={fillFormData('assets.otherAssets.other1.value')} /></td>
                            </tr>
                            <tr>
                                <td className='number border-1 border-dark'>2</td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.assets.otherAssets.other2.details}
                                    onChange={fillFormData('assets.otherAssets.other2.details')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.assets.otherAssets.other2.value}
                                    onChange={fillFormData('assets.otherAssets.other2.value')} /></td>
                            </tr>
                            <tr>
                                <td className='number border-1 border-dark'>3</td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.assets.otherAssets.other3.details}
                                    onChange={fillFormData('assets.otherAssets.other3.details')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.assets.otherAssets.other3.value}
                                    onChange={fillFormData('assets.otherAssets.other3.value')} /></td>
                            </tr>

                            <tr>
                                <td colSpan={3} className='text-end fw-bold border-1 border-dark'>Total Value of All Property</td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.assets.totalAssets}
                                    onChange={fillFormData('assets.totalAssets')} /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* 4 Debts */}
                <div className="row pb-20px pl-40px">
                    <p className="sub-heading">Part 4: DEBTS</p>

                    {/* Table */}
                    <table className='pb-40px form-13-debts border-1 border-dark'>
                        <thead>
                            <tr >
                                <th className='border-1 border-dark'>Type of Debt</th>
                                <th className='border-1 border-dark'>Creditor <small><i>(name and address)</i></small></th>
                                <th className='border-1 border-dark'>Full Amount Now Owing ($)</th>
                                <th className='border-1 border-dark'>Monthly Payments ($)</th>
                                <th className='border-1 border-dark'>Are Payments Being Made?</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='border-1 border-dark' rowSpan={3}>Mortgages, Lines of Credits or other Loans from a Bank, Trust or Finance Company</td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.debts.mortgage.m1.creditor}
                                    onChange={fillFormData('debts.mortgage.m1.creditor')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.debts.mortgage.m1.fullAmount}
                                    onChange={fillFormData('debts.mortgage.m1.fullAmount')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.debts.mortgage.m1.monthlyPayments}
                                    onChange={fillFormData('debts.mortgage.m1.monthlyPayments')} /></td>
                                <td className='border-1 border-dark'>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="paymentsMade11" value="yes" id="paymentsMadeYes11"
                                            checked={formData.debts.mortgage.m1.arePayementsMade === 'yes'}
                                            onChange={fillFormData('debts.mortgage.m1.arePayementsMade')}
                                        />
                                        <label className="form-check-label" htmlFor="paymentsMadeYes11">Yes</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="paymentsMade11" value="no" id="paymentsMadeNo11"
                                            checked={formData.debts.mortgage.m1.arePayementsMade === 'no'}
                                            onChange={fillFormData('debts.mortgage.m1.arePayementsMade')}
                                        />
                                        <label className="form-check-label" htmlFor="paymentsMadeNo11">No</label>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.debts.mortgage.m2.creditor}
                                    onChange={fillFormData('debts.mortgage.m2.creditor')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.debts.mortgage.m2.fullAmount}
                                    onChange={fillFormData('debts.mortgage.m2.fullAmount')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.debts.mortgage.m2.monthlyPayments}
                                    onChange={fillFormData('debts.mortgage.m2.monthlyPayments')} /></td>
                                <td className='border-1 border-dark'>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="paymentsMade12" value="yes"
                                            id="paymentsMadeYes12"
                                            checked={formData.debts.mortgage.m2.arePayementsMade === 'yes'}
                                            onChange={fillFormData('debts.mortgage.m2.arePayementsMade')}
                                        />
                                        <label className="form-check-label" htmlFor="paymentsMadeYes12">Yes</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="paymentsMade12" value="no"
                                            id="paymentsMadeNo12"
                                            checked={formData.debts.mortgage.m2.arePayementsMade === 'no'}
                                            onChange={fillFormData('debts.mortgage.m2.arePayementsMade')}
                                        />
                                        <label className="form-check-label" htmlFor="paymentsMadeNo12">No</label>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.debts.mortgage.m3.creditor}
                                    onChange={fillFormData('debts.mortgage.m3.creditor')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.debts.mortgage.m3.fullAmount}
                                    onChange={fillFormData('debts.mortgage.m3.fullAmount')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.debts.mortgage.m3.monthlyPayments}
                                    onChange={fillFormData('debts.mortgage.m3.monthlyPayments')} /></td>
                                <td className='border-1 border-dark'>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="paymentsMade13" value="yes"
                                            id="paymentsMadeYes13"
                                            checked={formData.debts.mortgage.m3.arePayementsMade === 'yes'}
                                            onChange={fillFormData('debts.mortgage.m3.arePayementsMade')}
                                        />
                                        <label className="form-check-label" htmlFor="paymentsMadeYes13">Yes</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="paymentsMade13" value="no"
                                            id="paymentsMadeNo13"
                                            checked={formData.debts.mortgage.m3.arePayementsMade === 'no'}
                                            onChange={fillFormData('debts.mortgage.m3.arePayementsMade')}
                                        />
                                        <label className="form-check-label" htmlFor="paymentsMadeNo13">No</label>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td className='border-1 border-dark' rowSpan={3}>Outstanding Credit Card Balances</td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.debts.creditCard.c1.creditor}
                                    onChange={fillFormData('debts.creditCard.c1.creditor')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.debts.creditCard.c1.fullAmount}
                                    onChange={fillFormData('debts.creditCard.c1.fullAmount')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.debts.creditCard.c1.monthlyPayments}
                                    onChange={fillFormData('debts.creditCard.c1.monthlyPayments')} /></td>
                                <td className='border-1 border-dark'>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="paymentsMade21" value="yes"
                                            id="paymentsMadeYes21"
                                            checked={formData.debts.creditCard.c1.arePayementsMade === 'yes'}
                                            onChange={fillFormData('debts.creditCard.c1.arePayementsMade')}
                                        />
                                        <label className="form-check-label" htmlFor="paymentsMadeYes21">Yes</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="paymentsMade21" value="no"
                                            id="paymentsMadeNo21"
                                            checked={formData.debts.creditCard.c1.arePayementsMade === 'no'}
                                            onChange={fillFormData('debts.creditCard.c1.arePayementsMade')}
                                        />
                                        <label className="form-check-label" htmlFor="paymentsMadeNo21">No</label>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.debts.creditCard.c2.creditor}
                                    onChange={fillFormData('debts.creditCard.c2.creditor')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.debts.creditCard.c2.fullAmount}
                                    onChange={fillFormData('debts.creditCard.c2.fullAmount')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.debts.creditCard.c2.monthlyPayments}
                                    onChange={fillFormData('debts.creditCard.c2.monthlyPayments')} /></td>
                                <td className='border-1 border-dark'>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="paymentsMade22" value="yes"
                                            id="paymentsMadeYes22"
                                            checked={formData.debts.creditCard.c2.arePayementsMade === 'yes'}
                                            onChange={fillFormData('debts.creditCard.c2.arePayementsMade')}
                                        />
                                        <label className="form-check-label" htmlFor="paymentsMadeYes22">Yes</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="paymentsMade22" value="no"
                                            id="paymentsMadeNo22"
                                            checked={formData.debts.creditCard.c2.arePayementsMade === 'no'}
                                            onChange={fillFormData('debts.creditCard.c2.arePayementsMade')}
                                        />
                                        <label className="form-check-label" htmlFor="paymentsMadeNo22">No</label>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.debts.creditCard.c3.creditor}
                                    onChange={fillFormData('debts.creditCard.c3.creditor')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.debts.creditCard.c3.fullAmount}
                                    onChange={fillFormData('debts.creditCard.c3.fullAmount')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.debts.creditCard.c3.monthlyPayments}
                                    onChange={fillFormData('debts.creditCard.c3.monthlyPayments')} /></td>
                                <td className='border-1 border-dark'>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="paymentsMade23" value="yes"
                                            id="paymentsMadeYes23"
                                            checked={formData.debts.creditCard.c3.arePayementsMade === 'yes'}
                                            onChange={fillFormData('debts.creditCard.c3.arePayementsMade')}
                                        />
                                        <label className="form-check-label" htmlFor="paymentsMadeYes23">Yes</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="paymentsMade23" value="no"
                                            id="paymentsMadeNo23"
                                            checked={formData.debts.creditCard.c3.arePayementsMade === 'no'}
                                            onChange={fillFormData('debts.creditCard.c3.arePayementsMade')}
                                        />
                                        <label className="form-check-label" htmlFor="paymentsMadeNo23">No</label>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td className='border-1 border-dark' rowSpan={3}>Unpaid Support Amounts</td>
                                <td className='border-1 border-dark' ><input className="form-control" value={formData.debts.unpaidSupport.u1.creditor}
                                    onChange={fillFormData('debts.unpaidSupport.u1.creditor')} /></td>
                                <td className='border-1 border-dark' ><input className="form-control" value={formData.debts.unpaidSupport.u1.fullAmount}
                                    onChange={fillFormData('debts.unpaidSupport.u1.fullAmount')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.debts.unpaidSupport.u1.monthlyPayments}
                                    onChange={fillFormData('debts.unpaidSupport.u1.monthlyPayments')} /></td>
                                <td className='border-1 border-dark' >
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="paymentsMade31" value="yes"
                                            id="paymentsMadeYes31"
                                            checked={formData.debts.unpaidSupport.u1.arePayementsMade === 'yes'}
                                            onChange={fillFormData('debts.unpaidSupport.u1.arePayementsMade')}
                                        />
                                        <label className="form-check-label" htmlFor="paymentsMadeYes31">Yes</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="paymentsMade31" value="no"
                                            id="paymentsMadeNo31"
                                            checked={formData.debts.unpaidSupport.u1.arePayementsMade === 'no'}
                                            onChange={fillFormData('debts.unpaidSupport.u1.arePayementsMade')}
                                        />
                                        <label className="form-check-label" htmlFor="paymentsMadeNo31">No</label>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.debts.unpaidSupport.u2.creditor}
                                    onChange={fillFormData('debts.unpaidSupport.u2.creditor')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.debts.unpaidSupport.u2.fullAmount}
                                    onChange={fillFormData('debts.unpaidSupport.u2.fullAmount')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.debts.unpaidSupport.u2.monthlyPayments}
                                    onChange={fillFormData('debts.unpaidSupport.u2.monthlyPayments')} /></td>
                                <td className='border-1 border-dark'>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="paymentsMade32" value="yes"
                                            id="paymentsMadeYes32"
                                            checked={formData.debts.unpaidSupport.u2.arePayementsMade === 'yes'}
                                            onChange={fillFormData('debts.unpaidSupport.u2.arePayementsMade')}
                                        />
                                        <label className="form-check-label" htmlFor="paymentsMadeYes32">Yes</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="paymentsMade32" value="no"
                                            id="paymentsMadeNo32"
                                            checked={formData.debts.unpaidSupport.u2.arePayementsMade === 'no'}
                                            onChange={fillFormData('debts.unpaidSupport.u2.arePayementsMade')}
                                        />
                                        <label className="form-check-label" htmlFor="paymentsMadeNo32">No</label>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.debts.unpaidSupport.u3.creditor}
                                    onChange={fillFormData('debts.unpaidSupport.u3.creditor')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.debts.unpaidSupport.u3.fullAmount}
                                    onChange={fillFormData('debts.unpaidSupport.u3.fullAmount')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.debts.unpaidSupport.u3.monthlyPayments}
                                    onChange={fillFormData('debts.unpaidSupport.u3.monthlyPayments')} /></td>
                                <td className='border-1 border-dark'>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="paymentsMade33" value="yes"
                                            id="paymentsMadeYes33"
                                            checked={formData.debts.unpaidSupport.u3.arePayementsMade === 'yes'}
                                            onChange={fillFormData('debts.unpaidSupport.u3.arePayementsMade')}
                                        />
                                        <label className="form-check-label" htmlFor="paymentsMadeYes33">Yes</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="paymentsMade33" value="no"
                                            id="paymentsMadeNo33"
                                            checked={formData.debts.unpaidSupport.u3.arePayementsMade === 'no'}
                                            onChange={fillFormData('debts.unpaidSupport.u3.arePayementsMade')}
                                        />
                                        <label className="form-check-label" htmlFor="paymentsMadeNo33">No</label>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td className='border-1 border-dark' rowSpan={3}>Other Debts</td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.debts.other.o1.creditor}
                                    onChange={fillFormData('debts.other.o1.creditor')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.debts.other.o1.fullAmount}
                                    onChange={fillFormData('debts.other.o1.fullAmount')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.debts.other.o1.monthlyPayments}
                                    onChange={fillFormData('debts.other.o1.monthlyPayments')} /></td>
                                <td className='border-1 border-dark'>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="paymentsMade41" value="yes"
                                            id="paymentsMadeYes41"
                                            checked={formData.debts.other.o1.arePayementsMade === 'yes'}
                                            onChange={fillFormData('debts.other.o1.arePayementsMade')}
                                        />
                                        <label className="form-check-label" htmlFor="paymentsMadeYes41">Yes</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="paymentsMade41" value="no"
                                            id="paymentsMadeNo41"
                                            checked={formData.debts.other.o1.arePayementsMade === 'no'}
                                            onChange={fillFormData('debts.other.o1.arePayementsMade')}
                                        />
                                        <label className="form-check-label" htmlFor="paymentsMadeNo41">No</label>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.debts.other.o2.creditor}
                                    onChange={fillFormData('debts.other.o2.creditor')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.debts.other.o2.fullAmount}
                                    onChange={fillFormData('debts.other.o2.fullAmount')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.debts.other.o2.monthlyPayments}
                                    onChange={fillFormData('debts.other.o2.monthlyPayments')} /></td>
                                <td className='border-1 border-dark'>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="paymentsMade42" value="yes"
                                            id="paymentsMadeYes42"
                                            checked={formData.debts.other.o2.arePayementsMade === 'yes'}
                                            onChange={fillFormData('debts.other.o2.arePayementsMade')}
                                        />
                                        <label className="form-check-label" htmlFor="paymentsMadeYes42">Yes</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="paymentsMade42" value="no"
                                            id="paymentsMadeNo42"
                                            checked={formData.debts.other.o2.arePayementsMade === 'no'}
                                            onChange={fillFormData('debts.other.o2.arePayementsMade')}
                                        />
                                        <label className="form-check-label" htmlFor="paymentsMadeNo42">No</label>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.debts.other.o3.creditor}
                                    onChange={fillFormData('debts.other.o3.creditor')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.debts.other.o3.fullAmount}
                                    onChange={fillFormData('debts.other.o3.fullAmount')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.debts.other.o3.monthlyPayments}
                                    onChange={fillFormData('debts.other.o3.monthlyPayments')} /></td>
                                <td className='border-1 border-dark'>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="paymentsMade43" value="yes"
                                            id="paymentsMadeYes43"
                                            checked={formData.debts.other.o3.arePayementsMade === 'yes'}
                                            onChange={fillFormData('debts.other.o3.arePayementsMade')}
                                        />
                                        <label className="form-check-label" htmlFor="paymentsMadeYes43">Yes</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="paymentsMade43" value="no"
                                            id="paymentsMadeNo43"
                                            checked={formData.debts.other.o3.arePayementsMade === 'no'}
                                            onChange={fillFormData('debts.other.o3.arePayementsMade')}
                                        />
                                        <label className="form-check-label" htmlFor="paymentsMadeNo43">No</label>
                                    </div>
                                </td>
                            </tr>


                            <tr>
                                <td colSpan={4} className='text-end fw-bold border-1 border-dark'>Total Amount of Debts Outstanding</td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.debts.totalDebts}
                                    onChange={fillFormData('debts.totalDebts')} /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/*5 Summary of Assets And Liabilities */}
                <div className="row pb-20px pl-40px justify-content-center">
                    <p className="sub-heading">Part 5: SUMMARY OF ASSETS AND LIABILITIES</p>

                    {/* Table */}
                    <div className="col-6">
                        <table className='pb-40px form-131-5'>
                            <tbody>
                                <tr className='results'>
                                    <td className="paragraph fw-bold text-center border-1 border-dark">Total Assets</td>
                                    <td className='border-1 border-dark'><input className="form-control text-end" value={formData.summary.totalAssets}
                                        onChange={fillFormData('summary.totalAssets')} /></td>
                                </tr>
                                <tr className='results'>
                                    <td className="paragraph fw-bold text-center border-1 border-dark">Subtract Total Debts</td>
                                    <td className='border-1 border-dark'><input className="form-control text-end" value={formData.summary.subtractTotalDebts}
                                        onChange={fillFormData('summary.subtractTotalDebts')} /></td>
                                </tr>
                                <tr className='results'>
                                    <td className="paragraph fw-bold text-center border-1 border-dark">Net Worth</td>
                                    <td className='border-1 border-dark'><input className="form-control text-end" value={formData.summary.netWorth}
                                        onChange={fillFormData('summary.netWorth')} /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>

                {/* Note */}
                <div className="row pb-20px pl-40px">
                    <p className="paragraph">NOTE:
                        <i>This financial statement must be updated before any court event if it is</i>
                    </p>
                    <ul className="pl-40px">
                        <li>more than 60 days old by the time of the case conference,</li>
                        <li>more than 30 days old by the time the motion is heard, or</li>
                        <li>more than 40 days old by the start of the trial or the start of the trial sitting, whichever comes first.</li>
                    </ul>

                    <p className="paragraph text-decoration-underline">
                        You may update this financial statement by either completing and filing:
                    </p>
                    <ul className="pl-40px">
                        <li>a new financial statement with updated information, or</li>
                        <li>an affidavit in Form 14A setting out the details of any minor changes or confirming that the information contained in this statement remains correct.</li>
                    </ul>
                </div>

                {/* Affirmation + Signature */}
                <div className="row pb-20px pl-40px">
                    <div className="col-8">
                        <div className="data-input">
                            <div className="label">Sworn/Affirmed before me at (municipality) </div>
                            <input type="text" className="form-control" value={formData.declaration.muncipility}
                                onChange={fillFormData('declaration.muncipility')} />
                        </div>
                        <div className="data-input mt-20px">
                            <div className="label">in (province, state or country) </div>
                            <input type="text" className="form-control" value={formData.declaration.state}
                                onChange={fillFormData('declaration.state')} />
                        </div>
                        <div className="data-input mt-20px">
                            <div className="label">on (date) </div>
                            <input type="date" className="form-control" value={formData.declaration.date}
                                onChange={fillFormData('declaration.date')} />
                        </div>
                        <div className="data-input flex-column mt-20px">
                            <input type="text" className="form-control d-block" value={formData.declaration.sigName}
                                onChange={fillFormData('declaration.sigName')} />
                            <div className="label">Commissioner for taking affidavits (Type or print name below if signature is illegible.) </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="data-input flex-column">
                            <input type="text" className="form-control d-block" value={formData.declaration.signature}
                                onChange={fillFormData('declaration.signature')} />
                            <div className="label text-wrap">Signature (This form is to be signed in front of a lawyer, justice of the peace, notary public or commissioner for taking affidavits.) </div>
                        </div>
                    </div>
                </div>

                {/* Schedule A */}
                <div className="row pb-20px pl-40px">
                    <p className="sub-heading">Schedule A: Additional Sources of Income</p>

                    {/* Table */}
                    <table className='pb-40px form-131-schedule-a'>
                        <thead className='border-1 border-dark'>
                            <tr className='border-1 border-dark'>
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
                                <td className="paragraph border-1 border-dark"> Total amount of dividents received from taxable Canadian corporations</td>
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
                    <p className="sub-heading">Schedule B: Other Income Earners in the Home</p>

                    <p className="paragraph fst-italic">Complete this part only if you are making or responding to a claim for undue hardship or spousal support. Check and complete all sections that apply to you circumstances.</p>

                    <ol>
                        <li>
                            <div className="d-flex flex-row">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" name="living_status_alone" value="alone" id="alone"
                                        checked={formData.scheduleB.liveAlone === true}
                                        onChange={changeFormCheck('scheduleB.liveAlone')}
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
                                    <input className="form-check-input" type="checkbox" name="living_status_partner" value="partner" id="partner"
                                        checked={formData.scheduleB.isLivingWith === true}
                                        onChange={changeFormCheck('scheduleB.isLivingWith')}
                                    />
                                    <label className="form-check-label text-nowrap" htmlFor="partner">
                                        I am living with (full legal name of person you are married to or cohabiting with)
                                    </label>
                                </div>
                                <div className="data-input w-100">
                                    <input type="text" className="form-control" value={formData.scheduleB.livingWith}
                                        onChange={fillFormData('scheduleB.livingWith')} />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="d-flex flex-row">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" name="living_status_children" value="children" id="children"
                                        checked={formData.scheduleB.isAdults === true}
                                        onChange={changeFormCheck('scheduleB.isAdults')}
                                    />
                                    <label className="form-check-label text-nowrap" htmlFor="children">
                                        I/we live with the following other adults(s):
                                    </label>
                                </div>
                                <div className="data-input w-100">
                                    <input type="text" className="form-control" value={formData.scheduleB.adults}
                                        onChange={fillFormData('scheduleB.adults')} />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="d-flex flex-row">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" name="living_status_no_of_children" value="no_of_children" id="no_of_children"
                                        checked={formData.scheduleB.isChildren === true}
                                        onChange={changeFormCheck('scheduleB.isChildren')}
                                    />
                                    <label className="form-check-label text-nowrap" htmlFor="no_of_children">
                                        I/we have (give number)
                                    </label>
                                </div>
                                <div className="data-input">
                                    <input type="text" className="form-control" value={formData.scheduleB.children}
                                        onChange={fillFormData('scheduleB.children')} />
                                </div>
                                <span className="paragraph mb-0">child(ren) who live(s) in the home.</span>
                            </div>
                        </li>
                        <li>
                            <p className="paragraph">My spouse/partner</p>
                            <div className="pl-40px">
                                <div className="d-flex flex-row">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="partner_works" value="yes" id="partner_works"
                                            checked={formData.scheduleB.partner.isWorks === 'yes'}
                                            onChange={fillFormData('scheduleB.partner.isWorks')}
                                        />
                                        <label className="form-check-label text-nowrap" htmlFor="partner_works">
                                            works at (place of work or business)
                                        </label>
                                    </div>
                                    <div className="data-input">
                                        <input type="text" className="form-control" value={formData.scheduleB.partner.worksAt}
                                            onChange={fillFormData('scheduleB.partner.worksAt')} />
                                    </div>
                                </div>
                                <div className="d-flex flex-row">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="partner_works" value="no" id="partner_not_works"
                                            checked={formData.scheduleB.partner.isWorks === 'no'}
                                            onChange={fillFormData('scheduleB.partner.isWorks')}
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
                                        <input className="form-check-input" type="radio" name="partner_earns" value="yes" id="partner_earns"
                                            checked={formData.scheduleB.partner.isEarns === 'yes'}
                                            onChange={fillFormData('scheduleB.partner.isEarns')}
                                        />
                                        <label className="form-check-label text-nowrap" htmlFor="partner_earns">
                                            earns (give amount) $
                                        </label>
                                    </div>
                                    <div className="data-input">
                                        <input type="text" className="form-control" value={formData.scheduleB.partner.earns}
                                            onChange={fillFormData('scheduleB.partner.earns')} />
                                    </div>
                                    <span className="paraphaph mb-0">per</span>
                                    <div className="data-input">
                                        <input type="text" className="form-control" value={formData.scheduleB.partner.earnsPer}
                                            onChange={fillFormData('scheduleB.partner.earnsPer')} />
                                    </div>
                                </div>
                                <div className="d-flex flex-row">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="partner_earns" value="no" id="partner_not_earns"
                                            checked={formData.scheduleB.partner.isEarns === 'no'}
                                            onChange={fillFormData('scheduleB.partner.isEarns')}
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
                                        <input type="text" className="form-control" value={formData.scheduleB.partner.contributions}
                                            onChange={fillFormData('scheduleB.partner.contributions')} />
                                    </div>
                                    <span className="parapraph mb-0">per</span>
                                    <div className="data-input">
                                        <input type="text" className="form-control" value={formData.scheduleB.partner.contributionsPer}
                                            onChange={fillFormData('scheduleB.partner.contributionsPer')} />
                                    </div>
                                </div>
                                <p className="paragraph">towards the household expenses.</p>
                            </div>
                        </li>
                    </ol>

                </div>

                {/* Schedule C */}
                <div className="row pb-20px pl-40px">
                    <p className="sub-heading">Schedule C: Special or Extraordinary Expenses for the Child(ren)</p>

                    {/* Table */}
                    <table className='pb-40px form-131-schedule-b'>
                        <thead className='border-1 border-dark'>
                            <tr className='border-1 border-dark'>
                                <th className='border-1 border-dark'>Child's Name</th>
                                <th className='border-1 border-dark'>Expenses</th>
                                <th className='border-1 border-dark'>Amount/yr.</th>
                                <th className='border-1 border-dark'>Available Tax Credits or Deductions*</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='inputs'>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.scheduleC.expenses.child1.name}
                                    onChange={fillFormData('scheduleC.expenses.child1.name')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.scheduleC.expenses.child1.expenses}
                                    onChange={fillFormData('scheduleC.expenses.child1.expenses')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.scheduleC.expenses.child1.amount}
                                    onChange={fillFormData('scheduleC.expenses.child1.amount')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.scheduleC.expenses.child1.tax}
                                    onChange={fillFormData('scheduleC.expenses.child1.tax')} /></td>
                            </tr>
                            <tr className='inputs'>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.scheduleC.expenses.child2.name}
                                    onChange={fillFormData('scheduleC.expenses.child2.name')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.scheduleC.expenses.child2.expenses}
                                    onChange={fillFormData('scheduleC.expenses.child2.expenses')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.scheduleC.expenses.child2.amount}
                                    onChange={fillFormData('scheduleC.expenses.child2.amount')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.scheduleC.expenses.child2.tax}
                                    onChange={fillFormData('scheduleC.expenses.child2.tax')} /></td>
                            </tr>
                            <tr className='inputs'>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.scheduleC.expenses.child3.name}
                                    onChange={fillFormData('scheduleC.expenses.child3.name')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.scheduleC.expenses.child3.expenses}
                                    onChange={fillFormData('scheduleC.expenses.child3.expenses')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.scheduleC.expenses.child3.amount}
                                    onChange={fillFormData('scheduleC.expenses.child3.amount')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.scheduleC.expenses.child3.tax}
                                    onChange={fillFormData('scheduleC.expenses.child3.tax')} /></td>
                            </tr>
                            <tr className='inputs'>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.scheduleC.expenses.child4.name}
                                    onChange={fillFormData('scheduleC.expenses.child4.name')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.scheduleC.expenses.child4.expenses}
                                    onChange={fillFormData('scheduleC.expenses.child4.expenses')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.scheduleC.expenses.child4.amount}
                                    onChange={fillFormData('scheduleC.expenses.child4.amount')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.scheduleC.expenses.child4.tax}
                                    onChange={fillFormData('scheduleC.expenses.child4.tax')} /></td>
                            </tr>
                            <tr className='inputs'>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.scheduleC.expenses.child5.name}
                                    onChange={fillFormData('scheduleC.expenses.child5.name')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.scheduleC.expenses.child5.expenses}
                                    onChange={fillFormData('scheduleC.expenses.child5.expenses')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.scheduleC.expenses.child5.amount}
                                    onChange={fillFormData('scheduleC.expenses.child5.amount')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.scheduleC.expenses.child5.tax}
                                    onChange={fillFormData('scheduleC.expenses.child5.tax')} /></td>
                            </tr>
                            <tr className='inputs'>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.scheduleC.expenses.child6.name}
                                    onChange={fillFormData('scheduleC.expenses.child6.name')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.scheduleC.expenses.child6.expenses}
                                    onChange={fillFormData('scheduleC.expenses.child6.expenses')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.scheduleC.expenses.child6.amount}
                                    onChange={fillFormData('scheduleC.expenses.child6.amount')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.scheduleC.expenses.child6.tax}
                                    onChange={fillFormData('scheduleC.expenses.child6.tax')} /></td>
                            </tr>
                            <tr className='inputs'>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.scheduleC.expenses.child7.name}
                                    onChange={fillFormData('scheduleC.expenses.child7.name')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.scheduleC.expenses.child7.expenses}
                                    onChange={fillFormData('scheduleC.expenses.child7.expenses')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.scheduleC.expenses.child7.amount}
                                    onChange={fillFormData('scheduleC.expenses.child7.amount')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.scheduleC.expenses.child7.tax}
                                    onChange={fillFormData('scheduleC.expenses.child7.tax')} /></td>
                            </tr>
                            <tr className='inputs'>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.scheduleC.expenses.child8.name}
                                    onChange={fillFormData('scheduleC.expenses.child8.name')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.scheduleC.expenses.child8.expenses}
                                    onChange={fillFormData('scheduleC.expenses.child8.expenses')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.scheduleC.expenses.child8.amount}
                                    onChange={fillFormData('scheduleC.expenses.child8.amount')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.scheduleC.expenses.child8.tax}
                                    onChange={fillFormData('scheduleC.expenses.child8.tax')} /></td>
                            </tr><tr className='inputs'>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.scheduleC.expenses.child9.name}
                                    onChange={fillFormData('scheduleC.expenses.child9.name')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.scheduleC.expenses.child9.expenses}
                                    onChange={fillFormData('scheduleC.expenses.child9.expenses')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.scheduleC.expenses.child9.amount}
                                    onChange={fillFormData('scheduleC.expenses.child9.amount')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.scheduleC.expenses.child9.tax}
                                    onChange={fillFormData('scheduleC.expenses.child9.tax')} /></td>
                            </tr>
                            <tr className='inputs'>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.scheduleC.expenses.child10.name}
                                    onChange={fillFormData('scheduleC.expenses.child10.name')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.scheduleC.expenses.child10.expenses}
                                    onChange={fillFormData('scheduleC.expenses.child10.expenses')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.scheduleC.expenses.child10.amount}
                                    onChange={fillFormData('scheduleC.expenses.child10.amount')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.scheduleC.expenses.child10.tax}
                                    onChange={fillFormData('scheduleC.expenses.child10.tax')} /></td>
                            </tr>
                            <tr className='inputs'>
                                <td colSpan={3} className="paragraph fw-bold text-end border-1 border-dark"> Total Net Annual Amount</td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.scheduleC.expenses.totalYearlyAmount}
                                    onChange={fillFormData('scheduleC.expenses.totalYearlyAmount')} /></td>
                            </tr>
                            <tr className='inputs'>
                                <td colSpan={3} className="paragraph fw-bold text-end border-1 border-dark"> Total Net Monthly Amount</td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.scheduleC.expenses.totalMonthlyAmount}
                                    onChange={fillFormData('scheduleC.expenses.totalMonthlyAmount')} /></td>
                            </tr>
                        </tbody>
                    </table>

                </div>

                {/* Acknowledge */}
                <div className="row pb-20px pl-40px">
                    <p className="paragraph fw-bold">*Some of these expenses can be claimed in a parent's income tax return in relation to a tax credit or deduction (for example childcare costs). These credits or deductions must be shown in the above chart.</p>

                    <div className="d-flex flex-row">
                        <div className="form-check d-flex">
                            <input className="form-check-input" type="checkbox" name="i_earns" value="i_earns" id="i_earns"
                                checked={formData.scheduleC.amIEarn === true}
                                onChange={changeFormCheck('scheduleC.amIEarn')}
                            />
                            <label className="form-check-label text-nowrap" htmlFor="i_earns">
                                I earn $
                            </label>
                            <div className="data-input">
                                <input type="text" className="form-control" value={formData.scheduleC.iEarn}
                                    onChange={fillFormData('scheduleC.iEarn')} />
                                <label className="form-check-label text-nowrap">
                                    per year which should be used to determine my share of the above expenses.
                                </label>
                            </div>
                        </div>
                    </div>

                    <p className="paragraph">
                        <span className='fw-bold'>NOTE: </span>
                        Pursuant to the Child Support Guidelines, a court can order that the parents of a child share the costs of the following expenses for the child:
                        <ul>
                            <li>Necessary childcare expenses;</li>
                            <li>Medical insurance premiums and certain health-related expenses for the child that cost more than $100 annually;</li>
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

export default FinancialStatement13