$(document).ready(function(){
    console.log("in---->")

    // $.ajax({
    //     type:"GET",
    //     url:"http://localhost:8000/faq",
    //     data: JSON.stringify(data),
    //     dataType:"json",
    //     contentType:"application/json",
    //     success:function(response){
    //         if (response.ok) {
    //             let data = response.data;
    //             faqData(data);
    //         } else {
    //             console.log("Data couldn't be fetched");
                
    //         }
    //     },
    //     error: function (XMLHttpRequest, textStatus, errorThrown) {
    //         alert(errorThrown);
    //     }
    // })

    let data = [
        {
            "faqId": 1,
            "question": "Testing 1",
            "answer": "Testing answer",
            "createdAt": "2024-09-24T05:05:26.000Z"
        },
        {
            "faqId": 2,
            "question": "Testing 2",
            "answer": "Testing answer",
            "createdAt": "2024-09-24T05:05:25.000Z"
        },
        {
            "faqId": 3,
            "question": "Testing 3",
            "answer": "Testing answer",
            "createdAt": "2024-09-24T05:05:24.000Z"
        },
        {
            "faqId": 4,
            "question": "Testing 4",
            "answer": "Testing answer",
            "createdAt": "2024-09-24T05:05:19.000Z"
        },
        {
            "faqId": 5,
            "question": "Testing 5",
            "answer": "Testing answer",
            "createdAt": "2024-09-24T05:04:58.000Z"
        },
        {
            "faqId": 6,
            "question": "Testing 6",
            "answer": "Testing answer",
            "createdAt": "2024-09-24T05:04:58.000Z"
        },
        {
            "faqId": 7,
            "question": "Testing 7",
            "answer": "Testing answer",
            "createdAt": "2024-09-24T05:04:58.000Z"
        },
        {
            "faqId": 8,
            "question": "Testing 8",
            "answer": "Testing answer",
            "createdAt": "2024-09-24T05:04:58.000Z"
        }
    ]    
    
    function faqData(data) {
        console.log(data);
    
        let result1 = '';
        let result2 = '';
    
        data.forEach((faq, index) => {
            const faqItem = `
                <div class="accordion-item">
                    <h2 class="accordion-header" id="heading${faq.faqId}">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${faq.faqId}" aria-expanded="${index === 0}" aria-controls="collapse${faq.faqId}">
                            ${faq.question}
                        </button>
                    </h2>
                    <div id="collapse${faq.faqId}" class="accordion-collapse collapse ${index === 0 ? 'show' : ''}" aria-labelledby="heading${faq.faqId}" data-bs-parent="#general_accordion-1">
                        <div class="accordion-body">
                            <p>${faq.answer}</p>
                        </div>
                    </div>
                </div>
            `;
    
            
            if (index % 2 === 0) {
                result1 += faqItem; 
            } else {
                result2 += faqItem; 
            }
        });
    
        // Insert the results into the respective columns
        $('#general_accordion').html(result1);
        $('#general_accordion-2').html(result2);
    }
    
    faqData(data);
    
})