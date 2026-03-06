import { colors, fonts } from "../styles/theme";
const MoodTracking = () => (
  <div className="page-enter" style={{ display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minHeight:"60vh",gap:16,textAlign:"center" }}>
    <div style={{ fontSize:64 }}>😊</div>
    <h2 style={{ fontFamily:fonts.display,fontSize:28,color:colors.text }}>Mood Tracking</h2>
    <p style={{ fontFamily:fonts.body,fontSize:15,color:colors.textMuted,maxWidth:360,lineHeight:1.6 }}>Track your emotions daily with beautiful charts and insights.</p>
    <div style={{ marginTop:8,padding:"12px 24px",borderRadius:12,background:colors.purpleSoft,border:`1px solid ${colors.lavender}`,fontSize:13,color:colors.purple,fontFamily:fonts.body,fontWeight:700 }}>🚀 Phase 2 — Coming Soon</div>
  </div>
);
export default MoodTracking;
