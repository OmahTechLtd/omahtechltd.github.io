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

          <div>
            <h2 className="text-2xl font-semibold text-green-400 mb-4">The Problem</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Nigeria has been producing crude oil below its OPEC quota for several years. The reasons are well known: pipeline vandalism, underinvestment, maturing fields, and operational disruptions across the Niger Delta. What has been less clear is a terminal-by-terminal picture of which export points are recovering, which are in structural decline, and what the national production portfolio looks like 12 to 24 months from now.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Without that picture, investment decisions are made on incomplete information, regulatory targets are set without a credible production baseline, and operators have no independent benchmark against which to assess their own performance. This project builds that picture using six years of publicly available NUPRC production data and two independent forecasting models.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-green-400 mb-4">The Data</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              The dataset covers January 2020 to April 2026, a span of 76 months across 30 active export terminals and 31 terminals in total. Data was sourced directly from NUPRC's public production reports and processed from annual Excel workbooks and published PDF reports. Each record captures crude oil and condensate volumes at the terminal level on a monthly frequency, with volumes reported in barrels.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              The dataset spans Nigeria's most volatile production period in recent history. It begins at a pre-OPEC-cut peak in January 2020, runs through the COVID-19 demand collapse, the severe pipeline vandalism crisis of 2021 to 2023, and into the ongoing recovery of 2024 to 2026. The range between the production floor (34.12 million barrels in September 2022) and the opening peak (65.95 million barrels in January 2020) is nearly 32 million barrels, a measure of how dramatically Nigerian production has swung within a single dataset.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Three new terminals enter the dataset during this period: NEMBE from January 2023, UTAPATE from January 2024, and CAWTHORNE from January 2026. Their ramp-up trajectories are treated separately in the analysis and represent the most recent wave of upstream investment in Nigeria's producing regions.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-green-400 mb-4">What We Built</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We built a dual-model forecasting system that runs Prophet and XGBoost in parallel on each terminal's production history. Running two models rather than one serves a specific purpose: where both models agree, the forecast is reliable. Where they diverge, the disagreement itself is informative and the uncertainty interval widens accordingly. The comparison between model outputs is reported as part of the results rather than hidden.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Prophet handles the trend and changepoint detection. Nigerian production is not a smooth series. It contains eight documented structural anomalies across 76 months, including the May 2020 OPEC cut, the February and April 2022 crisis events, the April 2023 production floor, and two significant February disruptions in 2024 and 2025. Rather than letting the model discover these retrospectively, we passed the known changepoint dates explicitly into Prophet's configuration. This makes the model more accurate and more transparent about what it is accounting for.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              XGBoost does not understand time natively, so we built the temporal structure into the features: lagged production values at one month, three months, and twelve months; rolling mean and standard deviation across three-month and twelve-month windows; month-over-month and year-over-year percentage changes; a month-of-year indicator; and a February-specific binary variable. The February dummy was added after the exploratory analysis confirmed below-average production in February across five consecutive years from 2022 to 2026, a pattern consistent enough to treat as a structural feature rather than coincidence.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Both models were trained on January 2020 to December 2023 data and evaluated on the 2024 holdout period before generating forecasts for 2025 and 2026. Performance is reported using MAE, RMSE, and MAPE on the held-out test set, not on training data.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-green-400 mb-4">Terminal Classification</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Every terminal in the dataset is assigned one of four classifications based on its production trajectory across the full analysis period.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-[#111111] border border-gray-800 rounded-xl p-5">
                <p className="text-green-400 font-semibold mb-2">Growing</p>
                <p className="text-gray-400 text-sm">Terminals showing a sustained upward trend in recent production. Includes UTAPATE, NEMBE, CAWTHORNE, and UGO OCHA, all of which represent new capacity added to Nigeria's upstream portfolio.</p>
              </div>
              <div className="bg-[#111111] border border-gray-800 rounded-xl p-5">
                <p className="text-blue-400 font-semibold mb-2">Recovering</p>
                <p className="text-gray-400 text-sm">Terminals that experienced significant production drops during the crisis period and have since rebuilt output. Forcados is the most significant example, having returned to near pre-crisis levels by early 2026.</p>
              </div>
              <div className="bg-[#111111] border border-gray-800 rounded-xl p-5">
                <p className="text-yellow-400 font-semibold mb-2">Stable</p>
                <p className="text-gray-400 text-sm">Terminals producing within a consistent band with no clear directional trend. Includes ESCRAVOS, QUA IBOE, BONGA, and ERHA, whose production rhythms are governed by scheduling and maintenance rather than disruption or decline.</p>
              </div>
              <div className="bg-[#111111] border border-gray-800 rounded-xl p-5">
                <p className="text-red-400 font-semibold mb-2">Declining</p>
                <p className="text-gray-400 text-sm">Terminals on a sustained downward trend consistent with natural reservoir depletion. AGBAMI and EGINA are the clearest examples, both showing steady volume reduction since 2020 with no operational disruption to account for it.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-green-400 mb-4">Key Findings</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              The exploratory analysis surfaces several findings that go beyond what is visible in national aggregates. Nigeria's production is not driven by a single uniform force. The seven major terminals behave in at least three distinct ways simultaneously: disruption and recovery at Forcados and Bonny, steady reservoir decline at Agbami and Egina, and relative stability at Escravos and Qua Iboe. Any policy or investment discussion that treats Nigerian production as a single number misses the structural divergence happening within the portfolio.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              The correlation analysis identifies a tightly coupled group of maturing deepwater terminals, including AGBAMI, EGINA, AKPO, ANTAN, OKORO, BRASS, and EBOK, whose production volumes move together because they share a common driver: reservoir depletion. This is not a coincidence or an artefact of the data. These fields are in natural decline and their forecasts reflect that reality.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              The most important positive finding is the strength of the Forcados recovery. By early 2026, Forcados was approaching or exceeding its pre-crisis production levels, which represents a genuine infrastructure and security improvement in one of Nigeria's most strategically significant export corridors. When combined with the ramp-up of UTAPATE and NEMBE, the data supports a cautiously optimistic near-term production outlook, provided the security environment holds.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Nigeria's proximity to its OPEC quota in late 2025 and early 2026, reaching 99 percent compliance in April 2026 according to NUPRC's published figures, represents the closest the country has come to its production target in several years. Whether this is sustained or whether it reflects a temporary peak is precisely the question the forecasting models are designed to address.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-green-400 mb-4">The Dashboard</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              The project delivers an interactive Streamlit dashboard that makes the full analysis accessible without requiring any technical knowledge. The dashboard is organised into three layers.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              The summary view shows Nigeria's total production history against the government's 2 million barrels per day target, the model's national portfolio forecast with confidence intervals, and a production status indicator showing where the country currently sits relative to its OPEC quota.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              The terminal explorer allows users to select any terminal and view its individual production history, the model forecast for the next 12 to 24 months, the confidence interval around that forecast, and its classification tag. The dual-model comparison is shown for each terminal so the reader can see where Prophet and XGBoost agree and where they diverge.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The portfolio table ranks all terminals by their forecast trajectory and flags terminals with notable recent events, including YOHO's effective production stoppage in late 2025, BONGA's February 2026 shutdown event, and CAWTHORNE's accelerating ramp-up.
            </p>

            <div className="bg-[#111111] border border-gray-800 rounded-xl p-6 mt-6">
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">Dashboard</p>
              <p className="text-gray-400 text-sm">
                The interactive dashboard is currently in development and will be deployed to a public URL on completion. This page will be updated with the live link once available.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-green-400 mb-4">Publication</h2>
            <p className="text-gray-300 leading-relaxed">
              This project is being prepared for publication as a research paper. It will be available on Zenodo as a citable preprint and submitted to Energy Reports for peer review. The full methodology, model configurations, evaluation results, and dataset documentation will be included in the published version.
            </p>
          </div>

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