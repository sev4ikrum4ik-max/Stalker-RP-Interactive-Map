/* ==========================================
   ЛЕВАЯ И ПРАВАЯ ПАНЕЛИ
========================================== */

.sidebar,
.info-panel{

    width:320px;

    background:#181b1f;

    border-right:1px solid #2b2f34;

    padding:20px;

    overflow-y:auto;

}

.info-panel{

    border-right:none;

    border-left:1px solid #2b2f34;

}

/* ==========================================
   КАРТОЧКА ОБЪЕКТА
========================================== */

.object-card{

    display:flex;
    flex-direction:column;
    gap:16px;

}

.object-image{

    width:100%;

    border-radius:10px;

    border:1px solid #34383d;

}

.object-card h2{

    color:#8fd95f;

    font-size:24px;

}

.object-type{

    display:inline-block;

    width:max-content;

    padding:6px 12px;

    border-radius:6px;

    background:#262b30;

    color:#9fe36c;

    font-weight:bold;

}

.object-coords{

    color:#8d9298;

    font-size:14px;

}

.object-description{

    color:#d5d5d5;

    line-height:1.6;

}