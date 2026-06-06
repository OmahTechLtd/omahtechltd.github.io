import React from "react";
import { Link } from "react-router-dom";

const TerminalProductionForecast = () => {
  return (
    <div className="bg-black text-white min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">

        <div className="mb-4">
          <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest">Oil & Gas</span>
        </div>

        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 via-blue-400 to-orange-500 bg-clip-text text-transparent">
          Terminal-Level Production Decline Analysis and Forecasting
        </h1>

        <p className="text-gray-300 text-lg mb-12">
          A dual-model forecasting system that projects monthly crude oil and condensate production across Nigeria's upstream export terminals and classifies each terminal's trajectory, giving operators, investors, and regulators a clear picture of where production is headed.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-[#111111] p-6 rounded-xl border border-gray-800">
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Industry</p>
            <p className="text-white font-medium">Oil & Gas</p>
          </div>
          <div className="bg-[#111111] p-6 rounded-xl border border-gray-800">
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Data Source</p>
            <p className="text-white font-medium">NUPRC monthly production reports</p>
          </div>
          <div className="bg-[#111111] p-6 rounded-xl border border-gray-800">
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Dataset</p>
            <p className="text-white font-medium">76 months across 30 terminals</p>
          </div>
        </div>

        <div className="space-y-12">

          {/* THE PROBLEM */}
          <div>
            <h2 className="text-2xl font-semibold text-green-400 mb-4">The Problem</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Nigeria has been producing crude oil below its OPEC quota for several years. The reasons are well known: pipeline vandalism, underinvestment, maturing fields, and operational disruptions across the Niger Delta. What has been less clear is a terminal-by-terminal picture of which export points are recovering, which are in structural decline, and what the national production portfolio looks like 12 to 24 months from now.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Without that picture, investment decisions are made on incomplete information, regulatory targets are set without a credible production baseline, and operators have no independent benchmark against which to assess their own performance. This project builds that picture using six years of publicly available NUPRC production data and two independent forecasting models.
            </p>
          </div>

          {/* THE DATA */}
          <div>
            <h2 className="text-2xl font-semibold text-green-400 mb-4">The Data</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              The dataset covers January 2020 to April 2026, a span of 76 months across 30 active export terminals. Data was sourced directly from NUPRC's public production reports and processed from annual Excel workbooks and published PDF reports. Each record captures crude oil and condensate volumes at the terminal level on a monthly frequency, with volumes reported in barrels.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              The dataset spans Nigeria's most volatile production period in recent history. It begins at a pre-OPEC-cut peak in January 2020, runs through the COVID-19 demand collapse, the severe pipeline vandalism crisis of 2021 to 2023, and into the ongoing recovery of 2024 to 2026. The range between the production floor of 34.12 million barrels in September 2022 and the opening peak of 65.95 million barrels in January 2020 is nearly 32 million barrels, a measure of how dramatically Nigerian production has swung across the analysis period.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Three new terminals enter the dataset during this period: NEMBE from January 2023, UTAPATE from January 2024, and CAWTHORNE from January 2026. Their ramp-up trajectories are treated separately in the analysis and represent the most recent wave of upstream investment in Nigeria's producing regions.
            </p>
          </div>

          {/* EDA CHARTS */}
          <div>
            <h2 className="text-2xl font-semibold text-green-400 mb-4">What the Data Shows</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Before any model was built, six years of production data were analysed across all terminals to understand the structure of the series, identify structural breaks, and examine how terminals relate to one another. Three charts from that analysis are presented below.
            </p>

            <div className="space-y-10">

              <div>
                <div className="bg-[#111111] border border-gray-800 rounded-xl overflow-hidden mb-3">
                  <img
                    src="/charts/chart1_national_total.png"
                    alt="Nigeria national crude oil and condensate production January 2020 to April 2026"
                    className="w-full"
                  />
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Nigeria's total crude oil and condensate production from January 2020 to April 2026. The series opens at its 76-month peak of 65.95 million barrels, falls sharply through the OPEC+ cut in May 2020, deteriorates further during the pipeline vandalism crisis, and reaches its absolute floor of 34.12 million barrels in September 2022 before recovering toward OPEC quota compliance by 2025 and 2026.
                </p>
              </div>

              <div>
                <div className="bg-[#111111] border border-gray-800 rounded-xl overflow-hidden mb-3">
                  <img
                    src="/charts/chart3_tier1_trends.png"
                    alt="Production trends for Nigeria's seven major export terminals"
                    className="w-full"
                  />
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Production trends for the seven major terminals averaging above 3 million barrels per month. The chart reveals three distinct behaviours operating simultaneously: disruption and recovery at Forcados and Bonny, steady reservoir decline at Agbami and Egina, and relative stability at Escravos and Qua Iboe. Any analysis that treats Nigerian production as a single aggregate number misses this structural divergence.
                </p>
              </div>

              <div>
                <div className="bg-[#111111] border border-gray-800 rounded-xl overflow-hidden mb-3">
                  <img
                    src="/charts/chart_residual_scatter.png"
                    alt="Actual versus predicted production by terminal tier, XGBoost test set 2024"
                    className="w-full"
                  />
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Actual versus predicted production across all three terminal tiers on the held-out 2024 test set. Points clustering tightly along the diagonal indicate accurate predictions. R-squared values of 0.983 for major terminals, 0.992 for mid-tier terminals, and 0.966 for small terminals confirm the model is capturing the production dynamics across the full portfolio.
                </p>
              </div>

            </div>
          </div>

          {/* WHAT WE BUILT */}
          <div>
            <h2 className="text-2xl font-semibold text-green-400 mb-4">What We Built</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We built a dual-model forecasting system that runs Prophet and XGBoost in parallel on each terminal's production history. Running two models rather than one serves a specific purpose: where both models agree, the forecast is reliable. Where they diverge, the disagreement itself is informative and the uncertainty interval widens accordingly.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Prophet handles trend and changepoint detection. Nigerian production contains ten documented structural anomalies across 76 months, including the May 2020 OPEC cut, the February and April 2022 crisis events, and the September 2022 production floor. These were passed as explicit changepoints rather than leaving the algorithm to discover them retrospectively, making the model more accurate and more transparent about what it is accounting for.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              XGBoost was trained on all terminals simultaneously using 17 engineered features including lag values at one, three, six, and twelve months; rolling averages and standard deviations; month-over-month and year-over-year change features; and a February-specific binary variable confirmed by five consecutive years of anomalous February underperformance. Training one model across the full terminal portfolio allows XGBoost to learn shared production patterns that a per-terminal model cannot access.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Both models were trained on January 2021 to December 2023 data, drawing on 2020 production history through the lag feature structure, and evaluated on the 2024 holdout period before generating forecasts through December 2026. Because NUPRC data is available through April 2026, model projections for 2025 and early 2026 can be compared directly against what actually occurred, providing a stronger validation than most published forecasting research can offer.
            </p>
          </div>

          {/* TERMINAL CLASSIFICATION */}
          <div>
            <h2 className="text-2xl font-semibold text-green-400 mb-4">Terminal Classification</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Every terminal in the dataset is assigned one of four classifications based on its production trajectory across the full analysis period.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-[#111111] border border-gray-800 rounded-xl p-5">
                <p className="text-green-400 font-semibold mb-2">Growing — 7 terminals</p>
                <p className="text-gray-400 text-sm">Terminals showing a sustained upward trend in recent production. Includes UTAPATE, NEMBE, CAWTHORNE, ANYALA MADU, UGO OCHA, TULJA-OKWUIBOME, and OTAKPIPO, representing a mix of new entrants and established terminals building volume.</p>
              </div>
              <div className="bg-[#111111] border border-gray-800 rounded-xl p-5">
                <p className="text-blue-400 font-semibold mb-2">Recovering — 11 terminals</p>
                <p className="text-gray-400 text-sm">Terminals that experienced significant production drops during the crisis period and have since rebuilt output. Forcados is the most significant, having returned to near pre-crisis levels by early 2026 and representing the strongest single-terminal recovery in the dataset.</p>
              </div>
              <div className="bg-[#111111] border border-gray-800 rounded-xl p-5">
                <p className="text-yellow-400 font-semibold mb-2">Stable — 2 terminals</p>
                <p className="text-gray-400 text-sm">Terminals producing within a consistent band with no clear directional trend. ESCRAVOS and YOHO, whose production rhythms are governed by scheduling and maintenance rather than disruption or structural change.</p>
              </div>
              <div className="bg-[#111111] border border-gray-800 rounded-xl p-5">
                <p className="text-red-400 font-semibold mb-2">Declining — 8 terminals</p>
                <p className="text-gray-400 text-sm">Terminals on a sustained downward trend consistent with natural reservoir depletion. AGBAMI and EGINA are the clearest examples, both showing steady volume reduction since 2020 with no operational disruption to account for it.</p>
              </div>
            </div>
          </div>

          {/* MODEL RESULTS */}
          <div>
            <h2 className="text-2xl font-semibold text-green-400 mb-4">Model Results</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              XGBoost outperforms Prophet on every terminal in the held-out 2024 evaluation set. The overall mean MAPE for XGBoost is 7.88 percent against 88.90 percent for Prophet. The median MAPE is 4.46 percent for XGBoost, meaning more than half of all terminal predictions are within 4.5 percent of the actual figure. XGBoost meets the 15 percent accuracy target on 22 of 26 terminals evaluated.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Prophet's underperformance is structural rather than incidental. Nigerian oil production is event-driven: structural breaks, force majeure events, and policy changes dominate the signal. Prophet is designed for series where smooth trend and repeating seasonality are the primary drivers. XGBoost's pattern-matching approach, trained across all terminals simultaneously, is better suited to this data.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              The residual analysis confirms the model carries no systematic national-level bias. The mean residual across all 321 test observations is negative 0.002 million barrels, effectively zero. Serial correlation in the residuals is negligible across all terminal tiers, confirming the model has captured the temporal structure of the production series and what remains is genuine unpredictability.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The one exception is Forcados, where the model consistently under-predicted by approximately 370,000 barrels per month across 2024. The reason is that Forcados staged a stronger recovery than the training data, which covered the crisis period, led the model to expect. Even with this directional bias, Forcados achieved a MAPE of 5 percent on the test set.
            </p>

            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="bg-[#111111] border border-gray-800 rounded-xl p-5 text-center">
                <p className="text-3xl font-bold text-green-400 mb-1">7.88%</p>
                <p className="text-gray-400 text-sm">XGBoost mean MAPE across 26 terminals</p>
              </div>
              <div className="bg-[#111111] border border-gray-800 rounded-xl p-5 text-center">
                <p className="text-3xl font-bold text-green-400 mb-1">0.983</p>
                <p className="text-gray-400 text-sm">R-squared for major terminal predictions</p>
              </div>
              <div className="bg-[#111111] border border-gray-800 rounded-xl p-5 text-center">
                <p className="text-3xl font-bold text-green-400 mb-1">22/26</p>
                <p className="text-gray-400 text-sm">Terminals meeting the 15% MAPE target</p>
              </div>
            </div>
          </div>

          {/* KEY FINDINGS */}
          <div>
            <h2 className="text-2xl font-semibold text-green-400 mb-4">Key Findings</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Nigeria's production is not driven by a single uniform force. The seven major terminals behave in at least three distinct ways simultaneously: disruption and recovery at Forcados and Bonny, steady reservoir decline at Agbami and Egina, and relative stability at Escravos and Qua Iboe. Any policy or investment discussion that treats Nigerian production as a single number misses the structural divergence within the portfolio.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              A tightly coupled group of maturing deepwater terminals including AGBAMI, EGINA, AKPO, ANTAN, OKORO, BRASS, and EBOK move together in decline because they share a common driver: reservoir depletion. Their forecasts reflect this shared trajectory and are unlikely to reverse without new drilling or enhanced recovery investment.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              The Forcados recovery is the most important positive finding in the dataset. By early 2026, Forcados was approaching or exceeding its pre-crisis production levels, representing a genuine infrastructure and security improvement in Nigeria's most strategically significant export corridor. Combined with the ramp-up of UTAPATE and NEMBE, the data supports a cautiously optimistic near-term production outlook.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Nigeria reached 99 percent OPEC quota compliance in April 2026 according to NUPRC's published figures, the closest the country has come to its production target in several years. Whether this is sustained or represents a temporary peak is precisely the question the forecasting models are designed to address.
            </p>
          </div>

          {/* DASHBOARD */}
          <div>
            <h2 className="text-2xl font-semibold text-green-400 mb-4">The Dashboard</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              The project delivers an interactive Streamlit dashboard that makes the full analysis accessible without requiring any technical knowledge. It is organised into four sections.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              The national overview shows Nigeria's total production history against the government's 2 million barrels per day target and OPEC quota line, with the model's portfolio-level forecast extending to December 2026 and a live metric showing the most recent month's production and quota compliance percentage.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              The terminal explorer allows users to select any of the 30 terminals and view its full production history, the Prophet and XGBoost forecasts side by side, the uncertainty band around each forecast, and the terminal's classification tag. Checkboxes allow each model and the uncertainty band to be toggled independently.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              The terminal classification portfolio displays all 30 terminals in a filterable table, sortable by classification and tier, with average and latest monthly production figures. Summary counts at the bottom show how the portfolio breaks down across the four classifications.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              The model performance section presents the full MAPE comparison table for all 26 evaluated terminals alongside the headline metrics, so any visitor can see the evidence behind the model selection.
            </p>

            <div className="bg-[#111111] border border-gray-800 rounded-xl p-6">
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">Live Dashboard</p>
              <p className="text-gray-400 text-sm mb-4">
                The interactive dashboard is live. Explore terminal-level production histories, model forecasts, classification tags, and the full model performance comparison.
              </p>
              <a
                href="https://terminal-forecast-dashboard.streamlit.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium text-sm transition"
              >
                Open Dashboard
              </a>
            </div>
          </div>

          {/* PUBLICATION */}
          <div>
            <h2 className="text-2xl font-semibold text-green-400 mb-4">Publication</h2>
            <p className="text-gray-300 leading-relaxed">
              This project is being prepared for publication as a research paper authored by Vera Ezeagu, OmahTech, Lagos, Nigeria. It will be available on Zenodo as a citable preprint and submitted to Energy Reports for peer review. The full methodology, model configurations, evaluation results, and dataset documentation will be included in the published version.
            </p>
          </div>

          {/* THE VALUE */}
          <div>
            <h2 className="text-2xl font-semibold text-green-400 mb-4">The Value</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              A terminal-level production forecast gives operators, investors, and regulators something that national aggregate statistics do not: a view of which specific assets are driving changes in Nigeria's production baseline and where the risks and opportunities are concentrated.
            </p>
            <p className="text-gray-300 leading-relaxed">
              For an operator managing export logistics, it supports production planning and offtake scheduling. For an investor evaluating upstream assets, it provides an independent trajectory assessment. For a regulator tracking quota compliance, it gives a forward-looking view of where the country's production capacity is likely to land. The same data, the same models, and the same results serve all three audiences.
            </p>
          </div>

        </div>

        <div className="mt-16 bg-[#111111] border border-gray-800 rounded-xl p-8 text-center">
          <h3 className="text-xl font-semibold text-white mb-3">Need a production forecast for your assets?</h3>
          <p className="text-gray-400 mb-6">
            We build terminal-level and field-level forecasting models tailored to your data, your operational context, and the decisions your team needs to make.
          </p>
          <a
            href="/#services"
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition"
          >
            Talk to Us
          </a>
        </div>

        <div className="mt-8 text-center">
          <Link to="/#projects" className="text-gray-500 hover:text-gray-300 text-sm transition">
            Back to Our Work
          </Link>
        </div>

      </div>
    </div>
  );
};

export default TerminalProductionForecast;