package com.example.a5g_app_project;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ImageButton;
import android.widget.Spinner;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.RecyclerView;

import com.example.a5g_app_project.DTO.SoftwareMainDTO;
import com.example.a5g_app_project.DTO.StandardMainDTO;
import com.example.a5g_app_project.DTO.TechnologyMainDTO;
import com.example.a5g_app_project.DTO.TreatiseMainDTO;
import com.example.a5g_app_project.DTO.LincenseMainDTO;

import com.example.a5g_app_project.Interface.LicenseMainInterface;
import com.example.a5g_app_project.Interface.SoftwareMainInterface;
import com.example.a5g_app_project.Interface.StandardMainInterface;
import com.example.a5g_app_project.Interface.TechnologyMainInterface;
import com.example.a5g_app_project.Interface.TreatiseMainInterface;

import com.example.a5g_app_project.ItemClickListener.OnLicenseItemClickListener;
import com.example.a5g_app_project.ItemClickListener.OnSoftwareItemClickListener;
import com.example.a5g_app_project.ItemClickListener.OnStandardItemClickListener;
import com.example.a5g_app_project.ItemClickListener.OnTechnologyItemClickListener;
import com.example.a5g_app_project.ItemClickListener.OnTreatiseItemClickListener;
import com.example.a5g_app_project.adapters.LicenseAdapter;
import com.example.a5g_app_project.adapters.SoftwareAdapter;
import com.example.a5g_app_project.adapters.StandardAdapter;
import com.example.a5g_app_project.adapters.TechnologyAdapter;
import com.example.a5g_app_project.adapters.TreatiseAdapter;

import java.util.ArrayList;
import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class TreatiseMainActivity extends AppCompatActivity implements View.OnClickListener{

    private RecyclerView mTreatiseRecyclerView;


    private TreatiseAdapter mAdapter;
    private LicenseAdapter lAdapter;
    private SoftwareAdapter sAdapter;
    private StandardAdapter stAdapter;
    private TechnologyAdapter teAdapter;

    private List<TreatiseMainDTO> mDatas;
    private List<LincenseMainDTO> lDatas;
    private List<SoftwareMainDTO> sDatas;
    private List<StandardMainDTO> stDatas;
    private List<TechnologyMainDTO> teDatas;
    final Context context = this;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.treatise);

        mTreatiseRecyclerView = findViewById(R.id.treatise_main_recyclerview);
        Spinner spinner = (Spinner)findViewById(R.id.teatise_spinner);

        ImageButton treatise_back_btn = findViewById(R.id.treatise_back_button);
        ImageButton treatise_search_btn = findViewById(R.id.treatise_search_button);

        treatise_back_btn.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View view) {
                finish();
            }
        });
        treatise_search_btn.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View view) {
                Intent search_intent = new Intent(view.getContext(), SearchActivity.class);
                startActivity(search_intent);
            }
        });

        spinner.setOnItemSelectedListener(new AdapterView.OnItemSelectedListener() {

            @Override
            public void onItemSelected(AdapterView<?> adapterView, View view, int postion, long id) {
                if(postion == 0){
                    mDatas = new ArrayList<TreatiseMainDTO>();
                    Retrofit retrofit = new Retrofit.Builder()
                            .baseUrl("http://192.168.187.1:3000/")
                            .addConverterFactory(GsonConverterFactory.create())
                            .build();

                    TreatiseMainInterface service = retrofit.create(TreatiseMainInterface.class);

                    service.getQuestions().enqueue(new Callback<List<TreatiseMainDTO>>() {
                        @Override
                        public void onResponse(Call<List<TreatiseMainDTO>> call, Response<List<TreatiseMainDTO>> response) {
                            if (response.isSuccessful()) {
                                //정상적으로 통신이 성공한 경우
                                List<TreatiseMainDTO> TreatiseMainDTOS = response.body();
                                for (int i = 0; i < TreatiseMainDTOS.size(); i++) {
                                    String t_tid = String.valueOf(TreatiseMainDTOS.get(i).getTid());
                                    String t_business_year  = String.valueOf(TreatiseMainDTOS.get(i).getBuisness_year());
                                    String t_univ_name  = String.valueOf(TreatiseMainDTOS.get(i).getUniv_name());
                                    String t_department  = String.valueOf(TreatiseMainDTOS.get(i).getDepartment());
                                    String t_thesis_division  = String.valueOf(TreatiseMainDTOS.get(i).getThesis_division());
                                    String t_thesis_name  = String.valueOf(TreatiseMainDTOS.get(i).getThesis_name());
                                    String t_lead_author_name  = String.valueOf(TreatiseMainDTOS.get(i).getLead_author_name());
                                    String t_journal_name  = String.valueOf(TreatiseMainDTOS.get(i).getJournal_date());
                                    String t_journal_date  = String.valueOf(TreatiseMainDTOS.get(i).getJournal_name());
                                    String t_conference_name  = String.valueOf(TreatiseMainDTOS.get(i).getConference_country());
                                    String t_conference_date  = String.valueOf(TreatiseMainDTOS.get(i).getConference_date());
                                    String t_conference_country  = String.valueOf(TreatiseMainDTOS.get(i).getConference_name());

                                    TreatiseMainDTO data = new TreatiseMainDTO(t_tid, t_business_year, t_univ_name, t_department, t_thesis_division, t_thesis_name, t_lead_author_name, t_journal_name, t_journal_date, t_conference_name, t_conference_date, t_conference_country);
                                    mDatas.add(data);
                                }
                                mAdapter = new TreatiseAdapter(mDatas);
                                mTreatiseRecyclerView.setAdapter(mAdapter);

                                mAdapter.setOnItemClickListener(new OnTreatiseItemClickListener() {
                                    @Override
                                    public void onItemClick(TreatiseAdapter.TreatiseViewHolder holder, View view, int position) {
                                        TreatiseMainDTO item = mAdapter.getItem(position);
                                        Intent Treatise_detail_intent = new Intent(context, TreatiseDetailActivity.class);
                                        Treatise_detail_intent.putExtra("t_tid", item.getTid());
                                        Treatise_detail_intent.putExtra("t_business_year", item.getBuisness_year());
                                        Treatise_detail_intent.putExtra("t_univ_name", item.getUniv_name());
                                        Treatise_detail_intent.putExtra("t_department", item.getDepartment());
                                        Treatise_detail_intent.putExtra("t_thesis_division", item.getThesis_division());
                                        Treatise_detail_intent.putExtra("t_thesis_name", item.getThesis_name());
                                        Treatise_detail_intent.putExtra("t_lead_author_name", item.getLead_author_name());
                                        Treatise_detail_intent.putExtra("t_journal_name", item.getJournal_date());
                                        Treatise_detail_intent.putExtra("t_journal_date", item.getJournal_name());
                                        Treatise_detail_intent.putExtra("t_conference_name", item.getConference_name());
                                        Treatise_detail_intent.putExtra("t_conference_date", item.getConference_date());
                                        Treatise_detail_intent.putExtra("t_conference_country", item.getConference_country());

                                        startActivity(Treatise_detail_intent);
                                    }
                                });
                            } else {
                                Log.d("Treatise", "Fail");
                            }
                        }
                        @Override
                        public void onFailure(Call<List<TreatiseMainDTO>> call, Throwable t) {
                            Log.d("Faild", t.getMessage());
                        }
                    });
                }
                else if(postion == 1){
                    lDatas = new ArrayList<LincenseMainDTO>();
                    Retrofit retrofit3 = new Retrofit.Builder()
                            .baseUrl("http://192.168.187.1:3000/")
                            .addConverterFactory(GsonConverterFactory.create())
                            .build();

                    LicenseMainInterface service3 = retrofit3.create(LicenseMainInterface.class);

                    service3.getQuestions().enqueue(new Callback<List<LincenseMainDTO>>() {
                        @Override
                        public void onResponse(Call<List<LincenseMainDTO>> call, Response<List<LincenseMainDTO>> response) {
                            if (response.isSuccessful()) {
                                //정상적으로 통신이 성공한 경우
                                List<LincenseMainDTO> LicenseMainDTOS = response.body();
                                for (int i = 0; i < LicenseMainDTOS.size(); i++) {
                                    String l_number = String.valueOf(LicenseMainDTOS.get(i).getLid());
                                    String l_d = String.valueOf(LicenseMainDTOS.get(i).getApplication_category());
                                    String l_arp = String.valueOf(LicenseMainDTOS.get(i).getApplication_registration_period());
                                    String l_oi = String.valueOf(LicenseMainDTOS.get(i).getOwning_institution());
                                    String l_ca = String.valueOf(LicenseMainDTOS.get(i).getCountry_application());
                                    String l_in = String.valueOf(LicenseMainDTOS.get(i).getInvention_name());
                                    String l_af = String.valueOf(LicenseMainDTOS.get(i).getApplication_form());
                                    String l_ad = String.valueOf(LicenseMainDTOS.get(i).getApplication_date());
                                    String l_inor = String.valueOf(LicenseMainDTOS.get(i).getInventor());

                                    LincenseMainDTO data = new LincenseMainDTO(l_number, l_d, l_ad, l_af, l_arp, l_ca, l_in, l_inor, l_oi);
                                    lDatas.add(data);
                                }
                                lAdapter = new LicenseAdapter(lDatas);
                                mTreatiseRecyclerView.setAdapter(lAdapter);

                                lAdapter.setOnItemClickListener(new OnLicenseItemClickListener() {
                                    @Override
                                    public void onItemClick(LicenseAdapter.LicenseViewHolder holder, View view, int position) {
                                        LincenseMainDTO item = lAdapter.getItem(position);
                                        Intent License_detail_intent = new Intent(context, licenseDetailActivity.class);
                                        License_detail_intent.putExtra("l_number", item.getLid());
                                        License_detail_intent.putExtra("l_d", item.getApplication_category());
                                        License_detail_intent.putExtra("l_arp", item.getApplication_registration_period());
                                        License_detail_intent.putExtra("l_oi", item.getOwning_institution());
                                        License_detail_intent.putExtra("l_ca", item.getInvention_name());
                                        License_detail_intent.putExtra("l_af", item.getApplication_form());
                                        License_detail_intent.putExtra("l_ad", item.getApplication_date());
                                        License_detail_intent.putExtra("l_co", item.getCountry_application());
                                        License_detail_intent.putExtra("l_inor", item.getInventor());
                                        startActivity(License_detail_intent);
                                    }


                                });
                            } else {
                                Log.d("Treatise", "Fail");
                            }
                        }
                        @Override
                        public void onFailure(Call<List<LincenseMainDTO>> call, Throwable t) {
                            Log.d("Faild", t.getMessage());
                        }
                    });


                }
                else if(postion == 2){
                    sDatas = new ArrayList<SoftwareMainDTO>();
                    Retrofit retrofit = new Retrofit.Builder()
                            .baseUrl("http://192.168.187.1:3000/")
                            .addConverterFactory(GsonConverterFactory.create())
                            .build();

                   SoftwareMainInterface service4 = retrofit.create(SoftwareMainInterface.class);

                    service4.getQuestions().enqueue(new Callback<List<SoftwareMainDTO>>() {
                        @Override
                        public void onResponse(Call<List<SoftwareMainDTO>> call, Response<List<SoftwareMainDTO>> response) {
                            if (response.isSuccessful()) {
                                //정상적으로 통신이 성공한 경우
                                List<SoftwareMainDTO> SoftwareMainDTOS = response.body();
                                for (int i = 0; i < SoftwareMainDTOS.size(); i++) {
                                    String s_sid = String.valueOf(SoftwareMainDTOS.get(i).getSid());
                                    String s_business_year  = String.valueOf(SoftwareMainDTOS.get(i).getBuisness_year());
                                    String s_division  = String.valueOf(SoftwareMainDTOS.get(i).getDivision());
                                    String s_registration  = String.valueOf(SoftwareMainDTOS.get(i).getRegistration());
                                    String s_registration_num  = String.valueOf(SoftwareMainDTOS.get(i).getRegistration_num());
                                    String s_registration_name  = String.valueOf(SoftwareMainDTOS.get(i).getRegistration_name());
                                    String s_registrant  = String.valueOf(SoftwareMainDTOS.get(i).getRegistrant());
                                    String s_registration_date  = String.valueOf(SoftwareMainDTOS.get(i).getRegistration_date());
                                    String s_own_not  = String.valueOf(SoftwareMainDTOS.get(i).getOwn_not());
                                    String s_feature  = String.valueOf(SoftwareMainDTOS.get(i).getFeature());

                                    SoftwareMainDTO data = new SoftwareMainDTO(s_sid, s_business_year, s_division, s_registration, s_registration_num, s_registration_name, s_registrant, s_registration_date, s_own_not, s_feature);
                                    sDatas.add(data);
                                }
                                sAdapter = new SoftwareAdapter(sDatas);
                                mTreatiseRecyclerView.setAdapter(sAdapter);

                                sAdapter.setOnItemClickListener(new OnSoftwareItemClickListener() {
                                    @Override
                                    public void onItemClick(SoftwareAdapter.SoftwareViewHolder holder, View view, int position) {
                                        SoftwareMainDTO item = sAdapter.getItem(position);
                                        Intent Software_detail_intent = new Intent(context, SoftwareDetailActivity.class);
                                        Software_detail_intent.putExtra("s_sid", item.getSid());
                                        Software_detail_intent.putExtra("s_business_year", item.getBuisness_year());
                                        Software_detail_intent.putExtra("s_division", item.getDivision());
                                        Software_detail_intent.putExtra("s_registration", item.getRegistration());
                                        Software_detail_intent.putExtra("s_registration_num", item.getRegistration_num());
                                        Software_detail_intent.putExtra("s_registration_name", item.getRegistration_name());
                                        Software_detail_intent.putExtra("s_registrant", item.getRegistrant());
                                        Software_detail_intent.putExtra("s_registration_date", item.getRegistration_date());
                                        Software_detail_intent.putExtra("s_own_not", item.getOwn_not());
                                        Software_detail_intent.putExtra("s_feature", item.getFeature());

                                        startActivity(Software_detail_intent);
                                    }
                                });
                            } else {
                                Log.d("Software", "Fail");
                            }
                        }
                        @Override
                        public void onFailure(Call<List<SoftwareMainDTO>> call, Throwable t) {
                            Log.d("Faild", t.getMessage());
                        }
                    });

                }
                else if(postion == 3){
                    stDatas = new ArrayList<StandardMainDTO>();
                    Retrofit retrofit = new Retrofit.Builder()
                            .baseUrl("http://192.168.187.1:3000/")
                            .addConverterFactory(GsonConverterFactory.create())
                            .build();

                    StandardMainInterface service5 = retrofit.create(StandardMainInterface.class);

                    service5.getQuestions().enqueue(new Callback<List<StandardMainDTO>>() {
                        @Override
                        public void onResponse(Call<List<StandardMainDTO>> call, Response<List<StandardMainDTO>> response) {
                            if (response.isSuccessful()) {
                                //정상적으로 통신이 성공한 경우
                                List<StandardMainDTO> StandardMainDTOS = response.body();
                                for (int i = 0; i < StandardMainDTOS.size(); i++) {
                                    String s_stid = String.valueOf(StandardMainDTOS.get(i).getStid());
                                    String s_business_year = String.valueOf(StandardMainDTOS.get(i).getBusiness_year());
                                    String s_division = String.valueOf(StandardMainDTOS.get(i).getDivision());
                                    String s_domestic_division = String.valueOf(StandardMainDTOS.get(i).getDomestic_division());
                                    String s_kind = String.valueOf(StandardMainDTOS.get(i).getKind());
                                    String s_document = String.valueOf(StandardMainDTOS.get(i).getDocument());
                                    String s_standardization_organization = String.valueOf(StandardMainDTOS.get(i).getStandardization_organization());
                                    String s_standardization_organization_name = String.valueOf(StandardMainDTOS.get(i).getStandardization_organization_name());
                                    String s_standardization_steps_detail = String.valueOf(StandardMainDTOS.get(i).getStandardization_steps_detail());
                                    String s_standardization_meeting = String.valueOf(StandardMainDTOS.get(i).getStandardization_meeting());
                                    String s_step = String.valueOf(StandardMainDTOS.get(i).getStep());
                                    String s_category_revision = String.valueOf(StandardMainDTOS.get(i).getCategory_revision());
                                    String s_self_directed_not = String.valueOf(StandardMainDTOS.get(i).getSelf_directed_not());
                                    String s_proposal_organization = String.valueOf(StandardMainDTOS.get(i).getProposal_organization());
                                    String s_proponent = String.valueOf(StandardMainDTOS.get(i).getProponent());
                                    String s_approval_num = String.valueOf(StandardMainDTOS.get(i).getApproval_num());
                                    String s_approval_date = String.valueOf(StandardMainDTOS.get(i).getApproval_date());
                                    String s_technical_summary = String.valueOf(StandardMainDTOS.get(i).getTechnical_summary());
                                    String s_application_field = String.valueOf(StandardMainDTOS.get(i).getApplication_field());
                                    String s_contribution_rate = String.valueOf(StandardMainDTOS.get(i).getContribution_rate());

                                    StandardMainDTO data = new StandardMainDTO(s_stid, s_business_year, s_division, s_domestic_division, s_kind, s_document,
                                            s_standardization_organization, s_standardization_organization_name, s_standardization_steps_detail, s_standardization_meeting, s_step, s_category_revision,
                                            s_self_directed_not,s_proposal_organization,s_proponent,s_approval_num,s_approval_date,s_technical_summary,s_application_field,s_contribution_rate);
                                    stDatas.add(data);
                                }

                                stAdapter = new StandardAdapter(stDatas);
                                mTreatiseRecyclerView.setAdapter(stAdapter);

                                stAdapter.setOnItemClickListener(new OnStandardItemClickListener() {
                                    @Override
                                    public void onItemClick(StandardAdapter.StandardViewHolder holder, View view, int position) {
                                        StandardMainDTO item = stAdapter.getItem(position);
                                        Intent Standard_detail_intent = new Intent(context, StandardDetailActivity.class);
                                        Standard_detail_intent.putExtra("s_stid", item.getStid());
                                        Standard_detail_intent.putExtra("s_business_year", item.getBusiness_year());
                                        Standard_detail_intent.putExtra("s_division", item.getDivision());
                                        Standard_detail_intent.putExtra("s_domestic_division", item.getDomestic_division());
                                        Standard_detail_intent.putExtra("s_kind", item.getKind());
                                        Standard_detail_intent.putExtra("s_document", item.getDocument());
                                        Standard_detail_intent.putExtra("s_standardization_organization", item.getStandardization_organization());
                                        Standard_detail_intent.putExtra("s_standardization_organization_name", item.getStandardization_organization_name());
                                        Standard_detail_intent.putExtra("s_standardization_steps_detail", item.getStandardization_steps_detail());
                                        Standard_detail_intent.putExtra("s_standardization_meeting", item.getStandardization_meeting());
                                        Standard_detail_intent.putExtra("s_step", item.getStep());
                                        Standard_detail_intent.putExtra("s_category_revision", item.getCategory_revision());
                                        Standard_detail_intent.putExtra("s_self_directed_not", item.getSelf_directed_not());
                                        Standard_detail_intent.putExtra("s_proposal_organization", item.getProposal_organization());
                                        Standard_detail_intent.putExtra("s_proponent", item.getProponent());
                                        Standard_detail_intent.putExtra("s_approval_num", item.getApproval_num());
                                        Standard_detail_intent.putExtra("s_approval_date", item.getApproval_date());
                                        Standard_detail_intent.putExtra("s_technical_summary", item.getTechnical_summary());
                                        Standard_detail_intent.putExtra("s_application_field", item.getApplication_field());
                                        Standard_detail_intent.putExtra("s_contribution_rate", item.getContribution_rate());

                                        startActivity(Standard_detail_intent);
                                    }
                                });
                            } else {
                                Log.d("Standard", "Fail");
                            }
                        }

                        @Override
                        public void onFailure(Call<List<StandardMainDTO>> call, Throwable t) {
                            Log.d("Faild", t.getMessage());
                        }
                    });


                }
                else if(postion == 4){
                    teDatas = new ArrayList<TechnologyMainDTO>();
                    Retrofit retrofit = new Retrofit.Builder()
                            .baseUrl("http://192.168.187.1:3000/")
                            .addConverterFactory(GsonConverterFactory.create())
                            .build();

                    TechnologyMainInterface service6 = retrofit.create(TechnologyMainInterface.class);

                    service6.getQuestions().enqueue(new Callback<List<TechnologyMainDTO>>() {
                        @Override
                        public void onResponse(Call<List<TechnologyMainDTO>> call, Response<List<TechnologyMainDTO>> response) {
                            if (response.isSuccessful()) {
                                //정상적으로 통신이 성공한 경우
                                List<TechnologyMainDTO> TechnologyMainDTOS = response.body();
                                for (int i = 0; i < TechnologyMainDTOS.size(); i++) {
                                    String t_tid = String.valueOf(TechnologyMainDTOS.get(i).getTid());
                                    String t_business_year  = String.valueOf(TechnologyMainDTOS.get(i).getBusiness_year());
                                    String t_tech_name  = String.valueOf(TechnologyMainDTOS.get(i).getTech_name());
                                    String t_tech_year  = String.valueOf(TechnologyMainDTOS.get(i).getTech_year());
                                    String t_tech_country  = String.valueOf(TechnologyMainDTOS.get(i).getTech_country());
                                    String t_contract_amount  = String.valueOf(TechnologyMainDTOS.get(i).getContract_amount());
                                    String t_collection_amount  = String.valueOf(TechnologyMainDTOS.get(i).getCollection_amount());
                                    String t_techcontract_date  = String.valueOf(TechnologyMainDTOS.get(i).getTechcontract_date());
                                    String t_governmentPaymentTech_amount  = String.valueOf(TechnologyMainDTOS.get(i).getGovernmentPaymentTech_amount());
                                    String t_RAI_name  = String.valueOf(TechnologyMainDTOS.get(i).getRAI_name());
                                    String t_RAI_type = String.valueOf(TechnologyMainDTOS.get(i).getRAI_type());
                                    String t_techFeePay_method  = String.valueOf(TechnologyMainDTOS.get(i).getTechFeePay_method());
                                    String t_TI_method  = String.valueOf(TechnologyMainDTOS.get(i).getTI_method());
                                    String t_TI_detail  = String.valueOf(TechnologyMainDTOS.get(i).getTI_detail());
                                    String t_TIinstitution_name  = String.valueOf(TechnologyMainDTOS.get(i).getTIinstitution_name());
                                    String t_TI_num  = String.valueOf(TechnologyMainDTOS.get(i).getTI_num());
                                    String t_TI_type  = String.valueOf(TechnologyMainDTOS.get(i).getTI_type());
                                    String t_government_contribution  = String.valueOf(TechnologyMainDTOS.get(i).getGovernment_contribution());
                                    String t_privateResearch_fund  = String.valueOf(TechnologyMainDTOS.get(i).getPrivateResearch_fund());
                                    String t_techTransfer_type  = String.valueOf(TechnologyMainDTOS.get(i).getTechTransfer_type());
                                    String t_techApplication_form  = String.valueOf(TechnologyMainDTOS.get(i).getTechApplication_form());
                                    String t_techTransfer_format  = String.valueOf(TechnologyMainDTOS.get(i).getTechTransfer_format());
                                    String t_intellectualPropertyRights  = String.valueOf(TechnologyMainDTOS.get(i).getIntellectualPropertyRights());


                                    TechnologyMainDTO data = new TechnologyMainDTO(t_tid, t_business_year, t_tech_name, t_tech_year, t_tech_country, t_contract_amount, t_collection_amount, t_techcontract_date, t_governmentPaymentTech_amount, t_RAI_name, t_RAI_type, t_techFeePay_method, t_TI_method, t_TI_detail, t_TIinstitution_name, t_TI_num, t_TI_type, t_government_contribution, t_privateResearch_fund, t_techTransfer_type, t_techApplication_form, t_techTransfer_format, t_intellectualPropertyRights);
                                    teDatas.add(data);
                                }
                                teAdapter = new TechnologyAdapter(teDatas);
                                mTreatiseRecyclerView.setAdapter(teAdapter);

                                teAdapter.setOnItemClickListener(new OnTechnologyItemClickListener() {
                                    @Override
                                    public void onItemClick(TechnologyAdapter.TechnologyViewHolder holder, View view, int position) {
                                        TechnologyMainDTO item = teAdapter.getItem(position);
                                        Intent Technology_detail_intent = new Intent(context, TechnologyDetailActivity.class);
                                        Technology_detail_intent.putExtra("t_tid", item.getTid());
                                        Technology_detail_intent.putExtra("t_business_year", item.getBusiness_year());
                                        Technology_detail_intent.putExtra("t_tech_name", item.getTech_name());
                                        Technology_detail_intent.putExtra("t_tech_year", item.getTech_year());
                                        Technology_detail_intent.putExtra("t_tech_country", item.getTech_country());
                                        Technology_detail_intent.putExtra("t_contract_amount", item.getContract_amount());
                                        Technology_detail_intent.putExtra("t_collection_amount", item.getCollection_amount());
                                        Technology_detail_intent.putExtra("t_techcontract_date", item.getTechcontract_date());
                                        Technology_detail_intent.putExtra("t_governmentPaymentTech_amount", item.getGovernmentPaymentTech_amount());
                                        Technology_detail_intent.putExtra("t_RAI_name", item.getRAI_name());
                                        Technology_detail_intent.putExtra("t_RAI_type", item.getRAI_type());
                                        Technology_detail_intent.putExtra("t_techFeePay_method", item.getTechFeePay_method());
                                        Technology_detail_intent.putExtra("t_TI_method", item.getTI_method());
                                        Technology_detail_intent.putExtra("t_TI_detail", item.getTI_detail());
                                        Technology_detail_intent.putExtra("t_TIinstitution_name", item.getTIinstitution_name());
                                        Technology_detail_intent.putExtra("t_TI_num", item.getTI_num());
                                        Technology_detail_intent.putExtra("t_TI_type", item.getTI_type());
                                        Technology_detail_intent.putExtra("t_government_contribution", item.getGovernmentPaymentTech_amount());
                                        Technology_detail_intent.putExtra("t_privateResearch_fund", item.getPrivateResearch_fund());
                                        Technology_detail_intent.putExtra("t_techTransfer_type", item.getTechTransfer_type());
                                        Technology_detail_intent.putExtra("t_techApplication_form", item.getTechApplication_form());
                                        Technology_detail_intent.putExtra("t_techTransfer_format", item.getTechTransfer_format());
                                        Technology_detail_intent.putExtra("t_intellectualPropertyRights", item.getIntellectualPropertyRights());

                                        startActivity(Technology_detail_intent);
                                    }
                                });
                            } else {
                                Log.d("Technology", "Fail");
                            }
                        }
                        @Override
                        public void onFailure(Call<List<TechnologyMainDTO>> call, Throwable t) {
                            Log.d("Faild", t.getMessage());
                        }
                    });

                }
            }

            @Override
            public void onNothingSelected(AdapterView<?> adapterView) {

            }
        });

    }

    @Override
    public void onClick(View view) {

    }
}