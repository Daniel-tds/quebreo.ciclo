import "./CicloSVG.css";

function CicloSVG() {
  return (
    <section className="containerSVG">
      <h2>Como a Violência Doméstica se Repete</h2>
      <div className="SVG">
                    <div className="desktop-svg">
                        <svg width="100%" viewBox="0 0 680 580" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <marker
                                    id="arrow"
                                    viewBox="0 0 10 10"
                                    refX="8"
                                    refY="5"
                                    markerWidth="6"
                                    markerHeight="6"
                                    orient="auto-start-reverse"
                                >
                                    <path
                                        d="M2 1L8 5L2 9"
                                        fill="none"
                                        stroke="#6B7280"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </marker>
                            </defs>

                            {/* ===== FASE 1 ===== */}

                            <g>
                                <rect x="10" y="1" width="270" height="130" rx="10" fill="#875695" opacity="0.92" />
                                <text x="25" y="30" fontSize="16" fill="#c8b8f0">FASE 1</text>
                                <text x="25" y="74" fontSize="24" fill="#fff">Aumento da tensão</text>
                                <text x="25" y="110" fontSize="16" fill="#c8b8f0">Conflitos, medo constante</text>
                                <path d="M280 75 Q360 75 400 130"  fill="none" stroke="#6B7280" strokeWidth="1.5" markerEnd="url(#arrow)" opacity="0.6" />
                            </g>

                            {/* ===== FASE 2 ===== */}
                            <g>
                                <rect x="400" y="130" width="270" height="130" rx="10" fill="#603fad" opacity="0.92" />
                                <text x="415" y="163" fontSize="16" fill="#ffc5c9">FASE 2</text>
                                <text x="415" y="205" fontSize="25" fill="#fff">Explosão</text>
                                <text x="415" y="240" fontSize="16" fill="#ffc5c9">Agressão física ou verbal</text>
                                <path d="M400 200 Q300 195 280 260"  fill="none" stroke="#6B7280" strokeWidth="1.5" markerEnd="url(#arrow)" opacity="0.6" />
                            </g>

                            {/* ===== FASE 3 ===== */}
                            <g>
                                <rect x="10" y="260" width="270" height="130" rx="10" fill="#4a2b90" opacity="0.9" />
                                <text x="25" y="293" fontSize="16" fill="#ddc8f5">FASE 3</text>
                                <text x="25" y="335" fontSize="25" fill="#fff">Arrependimento</text>
                                <text x="25" y="370" fontSize="16" fill="#ddc8f5">Promessas, pedidos de perdão</text>
                                <path d="M280 325 Q360 325 400 390"  fill="none" stroke="#6B7280" strokeWidth="1.5" markerEnd="url(#arrow)" opacity="0.6" />
                            </g>

                            {/* ===== FASE 4 ===== */}
                            <g>
                                <rect x="400" y="390" width="270" height="130" rx="10" fill="#361669" opacity="0.88" />
                                <text x="415" y="425" fontSize="16" fill="#f0e4ff">FASE 4</text>
                                <text x="415" y="465" fontSize="25" fill="#fff">Lua de mel</text>
                                <text x="415" y="500" fontSize="16" fill="#f0e4ff">Calma ilusória, afeto falso</text>

                            </g>



                            {/* Linha de fundo */}
                            <line x1="40" y1="535" x2="640" y2="535" stroke="#6B7280" strokeWidth="0.5" opacity="0.3" />
                            <text x="340" y="555" fontSize="12" fontWeight="500" fill="#361669" textAnchor="middle" opacity="0.75">
                                Romper o ciclo é possível — ligue 180
                            </text>
                        </svg>
                    </div>




                    <div className="mobile-svg">
                        <svg width="100%" viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg">

                            <defs>
                                <marker
                                    id="arrowMobile"
                                    viewBox="0 0 10 10"
                                    refX="5"
                                    refY="5"
                                    markerWidth="6"
                                    markerHeight="6"
                                    orient="auto"
                                >
                                    <path
                                        d="M2 2 L8 5 L2 8"
                                        fill="#6B7280"
                                    />
                                </marker>
                            </defs>

                            {/* ===== FASE 1 ===== */}
                            <g>
                                <rect x="40" y="20" width="300" height="110" rx="12" fill="#875695" />
                                <text x="60" y="50" fontSize="14" fill="#c8b8f0">FASE 1</text>
                                <text x="60" y="75" fontSize="18" fill="#fff">Aumento da tensão</text>
                                <text x="60" y="100" fontSize="13" fill="#c8b8f0">Conflitos, medo constante</text>
                                <path d="M200 130 L200 160" stroke="#6B7280" strokeWidth="1.5" markerEnd="url(#arrowMobile)" />
                            </g>



                            {/* ===== FASE 2 ===== */}
                            <g>
                                <rect x="40" y="170" width="300" height="110" rx="12" fill="#603fad" />
                                <text x="60" y="200" fontSize="14" fill="#ffc5c9">FASE 2</text>
                                <text x="60" y="225" fontSize="18" fill="#fff">Explosão</text>
                                <text x="60" y="250" fontSize="13" fill="#ffc5c9">Agressão física ou verbal</text>
                                <path d="M200 280 L200 310" stroke="#6B7280" strokeWidth="1.5" markerEnd="url(#arrowMobile)" />
                            </g>



                            {/* ===== FASE 3 ===== */}
                            <g>
                                <rect x="40" y="320" width="300" height="110" rx="12" fill="#4a2b90" />
                                <text x="60" y="350" fontSize="14" fill="#ddc8f5">FASE 3</text>
                                <text x="60" y="375" fontSize="18" fill="#fff">Arrependimento</text>
                                <text x="60" y="400" fontSize="13" fill="#ddc8f5">Promessas, pedidos de perdão</text>
                                <path d="M200 430 L200 460" stroke="#6B7280" strokeWidth="1.5" markerEnd="url(#arrowMobile)" />
                            </g>



                            {/* ===== FASE 4 ===== */}
                            <g>
                                <rect x="40" y="470" width="300" height="110" rx="12" fill="#361669" />
                                <text x="60" y="500" fontSize="14" fill="#f0e4ff">FASE 4</text>
                                <text x="60" y="525" fontSize="18" fill="#fff">Lua de mel</text>
                                <text x="60" y="550" fontSize="13" fill="#f0e4ff">Calma ilusória, afeto falso</text>
                            </g>


                            {/* legenda */}
                            <text x="200" y="610" fontSize="12" textAnchor="middle" fill="#361669">
                                Romper o ciclo é possível — ligue 180
                            </text>

                        </svg>
                    </div>

                </div>

        </section>
  );
}

export default CicloSVG;
